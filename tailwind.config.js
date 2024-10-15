var config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                modalOpen: "modalOpen 0.3s ease-in-out",
                modalClose: "modalClose 0.5s ease-in-out",
                slideInFromLeft: "slideInFromLeft 0.5s ease-in-out",
                slideOutToRight: "slideOutToRight 0.5s ease-in-out",
                slideInFromRight: "slideInFromRight 0.5s ease-in-out",
                slideOutToLeft: "slideOutToLeft 0.5s ease-in-out",
            },
            keyframes: {
                modalOpen: {
                    "0%": { transform: "scale(0.0)", opacity: "0" }, // Start small and invisible
                    "2%": { transform: "scale(0.02)", opacity: "0.02" },
                    "4%": { transform: "scale(0.05)", opacity: "0.05" },
                    "6%": { transform: "scale(0.1)", opacity: "0.1" },
                    "8%": { transform: "scale(0.15)", opacity: "0.15" },
                    "10%": { transform: "scale(0.2)", opacity: "0.2" },
                    "12%": { transform: "scale(0.25)", opacity: "0.25" },
                    "14%": { transform: "scale(0.3)", opacity: "0.3" },
                    "16%": { transform: "scale(0.35)", opacity: "0.35" },
                    "18%": { transform: "scale(0.4)", opacity: "0.4" },
                    "20%": { transform: "scale(0.45)", opacity: "0.45" },
                    "22%": { transform: "scale(0.5)", opacity: "0.5" },
                    "24%": { transform: "scale(0.55)", opacity: "0.55" },
                    "26%": { transform: "scale(0.6)", opacity: "0.6" },
                    "28%": { transform: "scale(0.65)", opacity: "0.65" },
                    "30%": { transform: "scale(0.7)", opacity: "0.7" },
                    "32%": { transform: "scale(0.75)", opacity: "0.75" },
                    "34%": { transform: "scale(0.8)", opacity: "0.8" },
                    "36%": { transform: "scale(0.85)", opacity: "0.85" },
                    "38%": { transform: "scale(0.88)", opacity: "0.88" },
                    "40%": { transform: "scale(0.9)", opacity: "0.9" },
                    "42%": { transform: "scale(0.92)", opacity: "0.92" },
                    "44%": { transform: "scale(0.94)", opacity: "0.94" },
                    "46%": { transform: "scale(0.96)", opacity: "0.96" },
                    "48%": { transform: "scale(0.98)", opacity: "0.98" },
                    "50%": { transform: "scale(1)", opacity: "1" }, // Full size and visible
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                modalClose: {
                    "0%": { transform: "scale(1)", opacity: "1" }, // Fully visible
                    "2%": { transform: "scale(0.98)", opacity: "0.98" }, // Slight shrink and fade
                    "4%": { transform: "scale(0.96)", opacity: "0.96" },
                    "6%": { transform: "scale(0.94)", opacity: "0.94" },
                    "8%": { transform: "scale(0.92)", opacity: "0.92" },
                    "10%": { transform: "scale(0.9)", opacity: "0.9" },
                    "12%": { transform: "scale(0.88)", opacity: "0.88" },
                    "14%": { transform: "scale(0.85)", opacity: "0.85" },
                    "16%": { transform: "scale(0.8)", opacity: "0.8" },
                    "18%": { transform: "scale(0.75)", opacity: "0.75" },
                    "20%": { transform: "scale(0.7)", opacity: "0.7" },
                    "22%": { transform: "scale(0.65)", opacity: "0.65" },
                    "24%": { transform: "scale(0.6)", opacity: "0.6" },
                    "26%": { transform: "scale(0.55)", opacity: "0.55" },
                    "28%": { transform: "scale(0.5)", opacity: "0.5" },
                    "30%": { transform: "scale(0.45)", opacity: "0.45" },
                    "32%": { transform: "scale(0.4)", opacity: "0.4" },
                    "34%": { transform: "scale(0.35)", opacity: "0.35" },
                    "36%": { transform: "scale(0.3)", opacity: "0.3" },
                    "38%": { transform: "scale(0.25)", opacity: "0.25" },
                    "40%": { transform: "scale(0.2)", opacity: "0.2" },
                    "42%": { transform: "scale(0.15)", opacity: "0.15" },
                    "44%": { transform: "scale(0.1)", opacity: "0.1" },
                    "46%": { transform: "scale(0.05)", opacity: "0.05" },
                    "48%": { transform: "scale(0.03)", opacity: "0.03" },
                    "50%": { transform: "scale(0.01)", opacity: "0.01" }, // Almost gone
                    "100%": { transform: "scale(0)", opacity: "0" },
                },
                slideInFromLeft: {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "5%": { transform: "translateX(-95%)", opacity: "0.05" },
                    "10%": { transform: "translateX(-90%)", opacity: "0.1" },
                    "15%": { transform: "translateX(-85%)", opacity: "0.15" },
                    "20%": { transform: "translateX(-80%)", opacity: "0.2" },
                    "25%": { transform: "translateX(-75%)", opacity: "0.25" },
                    "30%": { transform: "translateX(-70%)", opacity: "0.3" },
                    "35%": { transform: "translateX(-65%)", opacity: "0.35" },
                    "40%": { transform: "translateX(-60%)", opacity: "0.4" },
                    "45%": { transform: "translateX(-55%)", opacity: "0.45" },
                    "50%": { transform: "translateX(-50%)", opacity: "0.5" },
                    "55%": { transform: "translateX(-45%)", opacity: "0.55" },
                    "60%": { transform: "translateX(-40%)", opacity: "0.6" },
                    "65%": { transform: "translateX(-35%)", opacity: "0.65" },
                    "70%": { transform: "translateX(-30%)", opacity: "0.7" },
                    "75%": { transform: "translateX(-25%)", opacity: "0.75" },
                    "80%": { transform: "translateX(-20%)", opacity: "0.8" },
                    "85%": { transform: "translateX(-15%)", opacity: "0.85" },
                    "90%": { transform: "translateX(-10%)", opacity: "0.9" },
                    "95%": { transform: "translateX(-5%)", opacity: "0.95" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideOutToRight: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "5%": { transform: "translateX(5%)", opacity: "0.95" },
                    "10%": { transform: "translateX(10%)", opacity: "0.9" },
                    "15%": { transform: "translateX(15%)", opacity: "0.85" },
                    "20%": { transform: "translateX(20%)", opacity: "0.8" },
                    "25%": { transform: "translateX(25%)", opacity: "0.75" },
                    "30%": { transform: "translateX(30%)", opacity: "0.7" },
                    "35%": { transform: "translateX(35%)", opacity: "0.65" },
                    "40%": { transform: "translateX(40%)", opacity: "0.6" },
                    "45%": { transform: "translateX(45%)", opacity: "0.55" },
                    "50%": { transform: "translateX(50%)", opacity: "0.5" },
                    "55%": { transform: "translateX(55%)", opacity: "0.45" },
                    "60%": { transform: "translateX(60%)", opacity: "0.4" },
                    "65%": { transform: "translateX(65%)", opacity: "0.35" },
                    "70%": { transform: "translateX(70%)", opacity: "0.3" },
                    "75%": { transform: "translateX(75%)", opacity: "0.25" },
                    "80%": { transform: "translateX(80%)", opacity: "0.2" },
                    "85%": { transform: "translateX(85%)", opacity: "0.15" },
                    "90%": { transform: "translateX(90%)", opacity: "0.1" },
                    "95%": { transform: "translateX(95%)", opacity: "0.05" },
                    "100%": { transform: "translateX(100%)", opacity: "0" },
                },
                slideInFromRight: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "5%": { transform: "translateX(95%)", opacity: "0.05" },
                    "10%": { transform: "translateX(90%)", opacity: "0.1" },
                    "15%": { transform: "translateX(85%)", opacity: "0.15" },
                    "20%": { transform: "translateX(80%)", opacity: "0.2" },
                    "25%": { transform: "translateX(75%)", opacity: "0.25" },
                    "30%": { transform: "translateX(70%)", opacity: "0.3" },
                    "35%": { transform: "translateX(65%)", opacity: "0.35" },
                    "40%": { transform: "translateX(60%)", opacity: "0.4" },
                    "45%": { transform: "translateX(55%)", opacity: "0.45" },
                    "50%": { transform: "translateX(50%)", opacity: "0.5" },
                    "55%": { transform: "translateX(45%)", opacity: "0.55" },
                    "60%": { transform: "translateX(40%)", opacity: "0.6" },
                    "65%": { transform: "translateX(35%)", opacity: "0.65" },
                    "70%": { transform: "translateX(30%)", opacity: "0.7" },
                    "75%": { transform: "translateX(25%)", opacity: "0.75" },
                    "80%": { transform: "translateX(20%)", opacity: "0.8" },
                    "85%": { transform: "translateX(15%)", opacity: "0.85" },
                    "90%": { transform: "translateX(10%)", opacity: "0.9" },
                    "95%": { transform: "translateX(5%)", opacity: "0.95" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideOutToLeft: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "5%": { transform: "translateX(-5%)", opacity: "0.95" },
                    "10%": { transform: "translateX(-10%)", opacity: "0.9" },
                    "15%": { transform: "translateX(-15%)", opacity: "0.85" },
                    "20%": { transform: "translateX(-20%)", opacity: "0.8" },
                    "25%": { transform: "translateX(-25%)", opacity: "0.75" },
                    "30%": { transform: "translateX(-30%)", opacity: "0.7" },
                    "35%": { transform: "translateX(-35%)", opacity: "0.65" },
                    "40%": { transform: "translateX(-40%)", opacity: "0.6" },
                    "45%": { transform: "translateX(-45%)", opacity: "0.55" },
                    "50%": { transform: "translateX(-50%)", opacity: "0.5" },
                    "55%": { transform: "translateX(-55%)", opacity: "0.45" },
                    "60%": { transform: "translateX(-60%)", opacity: "0.4" },
                    "65%": { transform: "translateX(-65%)", opacity: "0.35" },
                    "70%": { transform: "translateX(-70%)", opacity: "0.3" },
                    "75%": { transform: "translateX(-75%)", opacity: "0.25" },
                    "80%": { transform: "translateX(-80%)", opacity: "0.2" },
                    "85%": { transform: "translateX(-85%)", opacity: "0.15" },
                    "90%": { transform: "translateX(-90%)", opacity: "0.1" },
                    "95%": { transform: "translateX(-95%)", opacity: "0.05" },
                    "100%": { transform: "translateX(-100%)", opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
