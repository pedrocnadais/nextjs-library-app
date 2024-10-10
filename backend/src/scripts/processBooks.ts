import { getUnprocessedSuggestions, insertBookIntoList } from "../controllers/bookController";
import { Book } from "../models/book";
import { BookSuggestion } from "../models/bookSuggestion";
import { scrapeBookData } from "../services/serpApiService";

export async function processBookSuggestions() {
 const suggestions: BookSuggestion[] = await getUnprocessedSuggestions();


 for (const suggestion of suggestions) {
   const { title, author } = suggestion;

   // Check if the book already exists in books_list
   const existingBook = await Book.findOne({
    where: {
      title: title.toLowerCase(), // Ensure case insensitivity
      author: author.toLowerCase()
    }
   });

    if (existingBook) {
     console.log(`Book "${title}" by ${author} already exists in the database. Skipping scraping.`)
     suggestion.processed = true;  // Mark as processed even if no scraping is done
      await suggestion.save();
      continue;  // Skip to the next suggestion
    }

  if (existingBook) {
    console.log(`Book "${title}" by ${author} already exists. Skipping.`);
    // Mark the suggestion as processed without scraping
    suggestion.processed = true;
    await suggestion.save();
    continue; // Skip to the next suggestion
  }

   // Scrape data
   const scrapedData = await scrapeBookData(title, author);

   console.log(scrapedData);
   
   if (scrapedData) {
     // Insert into book_list
     await insertBookIntoList({
       title,
       author,
       img: scrapedData.image || "not available",
       written: scrapedData.amazon_link || "not available",
       audio: scrapedData.audible_link || "not available",
     });

     // Mark the suggestion as processed
     suggestion.processed = true;
     await suggestion.save();
   }
 }
}

processBookSuggestions();
