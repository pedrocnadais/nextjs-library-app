// import axios from "axios";
// import { load as cheerioLoad } from "cheerio";
import { getJson } from "serpapi";

// async function scrapeAmazonImage(amazonLink: string) {
//   try {
//     const response = await axios.get(amazonLink);
//     const $ = cheerioLoad(response.data);

//     const imageUrl =
//       $("#imgBlkFront").attr("src") ||
//       $("#landingImage").attr("src") ||
//       $("[data-a-dynamic-image]").attr("src");

//     return imageUrl || "not available";
//   } catch (error) {
//     console.error("Error scraping image:", error);
//     return "not available";
//   }
// }

export async function scrapeBookData(title: string, author: string) {
  const params = {
    api_key: process.env.SERPAPI_KEY,
    engine: "google",
    q: `${title} ${author} book and audible`,
    google_domain: "google.com",
    // hl: "en",
    // gl: "us",
    num: "20",
    device: "desktop",
  };

  try {
    const response = await getJson(params);

    // Extract Amazon and Audible links from organic results
    const amazon_link =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      response?.organic_results?.find((result: any) =>
        result?.link?.includes("amazon.com")
      )?.link || "not available";

    // const amazonImage =
    //   amazon_link !== "not available"
    //     ? await scrapeAmazonImage(amazon_link)
    //     : "not available";

    const image =
      response?.shopping_results?.[0]?.thumbnail || // Shopping results thumbnail
      response?.shopping_results?.[0]?.images?.[0] || // Shopping results images
      response?.organic_results?.[0]?.thumbnail || // Organic results thumbnail
      response?.organic_results?.[0]?.images?.[0]?.link || // Organic results images
      response?.images_results?.[0]?.thumbnail || // General image results thumbnail
      response?.images_results?.[0]?.original || // General image results original
      "not available"; // Fallback

    // const image = amazonImage !== "not available" ? amazonImage : fallbackImage;

    const audible_link =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      response?.organic_results?.find((result: any) =>
        result?.link?.includes("audible.com")
      )?.link || "not available";

    // Return the extracted data
    const bookData = {
      image,
      amazon_link,
      audible_link,
    };

    return bookData;
  } catch (error) {
    console.error(`Error scraping data for ${title}:`, error);
    return null;
  }
}
