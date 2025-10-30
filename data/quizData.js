import sportsIcon from "../src/assets/sports.svg";
import codingIcon from "../src/assets/coding.svg";
import scienceIcon from "../src/assets/science.svg";
import geopoliticsIcon from "../src/assets/geopolitics.svg";
import mathsIcon from "../src/assets/maths.svg";
import financeIcon from "../src/assets/finance.svg";

export const quizData = [
  {
    category: "SPORTS",
    iconLink: sportsIcon,
    questions: [
      {
        question: "Which country won the FIFA World Cup 2022?",
        options: ["Brazil", "France", "Argentina", "Germany"],
        answer: "Argentina",
      },
      {
        question: "How many players are there in a cricket team?",
        options: ["10", "11", "12", "9"],
        answer: "11",
      },
      {
        question: "Which sport uses the term ‘Love’?",
        options: ["Football", "Tennis", "Badminton", "Hockey"],
        answer: "Tennis",
      },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Japan", "USA"],
        answer: "Brazil",
      },
      {
        question:
          "Who won the first Olympic gold medal for India in an individual event?",
        options: [
          "Abhinav Bindra",
          "Neeraj Chopra",
          "Milkha Singh",
          "P. T. Usha",
        ],
        answer: "Abhinav Bindra",
      },
      {
        question: "How many rings are there in the Olympic logo?",
        options: ["4", "5", "6", "7"],
        answer: "5",
      },
      {
        question: "How many overs are played in a standard ODI cricket match?",
        options: ["20", "40", "50", "60"],
        answer: "50",
      },
      {
        question: "In which year did India win its first Cricket World Cup?",
        options: ["1975", "1983", "2011", "1987"],
        answer: "1983",
      },
      {
        question: "The term “deuce” is used in which sport?",
        options: ["Tennis", "Football", "Hockey", "Volleyball"],
        answer: "Tennis",
      },
      {
        question: "Which of the following is not an Olympic sport?",
        options: ["Surfing", "Chess", "Skateboarding", "Archery"],
        answer: "Chess",
      },
      {
        question: "Table tennis is also known as?",
        options: ["Paddle game", "Ping pong", "Soft tennis", "Smash ball"],
        answer: "Ping pong",
      },
      {
        question: "In baseball, how many strikes make an out?",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
      {
        question: "Neeraj Chopra won gold in which event at the Olympics?",
        options: ["Discus Throw", "Javelin Throw", "Shot Put", "High Jump"],
        answer: "Javelin Throw",
      },
      {
        question:
          "How many players are there in a volleyball team on the court?",
        options: ["5", "6", "7", "8"],
        answer: "6",
      },
      {
        question:
          "Who is the first cricketer to score 100 international centuries?",
        options: [
          "Virat Kohli",
          "Ricky Ponting",
          "Sachin Tendulkar",
          "Brian Lara",
        ],
        answer: "Sachin Tendulkar",
      },
    ],
  },
  {
    category: "WEB DEVELOPMENT",
    iconLink: codingIcon,
    questions: [
      {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Python", "C++"],
        answer: "CSS",
      },
      {
        question: "What does ‘JSX’ stand for in React?",
        options: [
          "Java Syntax Extension",
          "JavaScript XML",
          "JSON Xtreme",
          "Java System X",
        ],
        answer: "JavaScript XML",
      },
      {
        question: "Which company developed the React library?",
        options: ["Google", "Facebook", "Amazon", "Microsoft"],
        answer: "Facebook",
      },
      {
        question: "Which HTML tag is used to link a JavaScript file?",
        options: ["<js>", "<javascript>", "<script>", "<link>"],
        answer: "<script>",
      },
      {
        question: "Which of the following is not a programming language?",
        options: ["Python", "HTML", "C++", "Java"],
        answer: "HTML",
      },
      {
        question:
          "In JavaScript, which symbol is used for comments in a single line?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//",
      },
      {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["let", "const", "var", "static"],
        answer: "const",
      },
      {
        question:
          "Which method is used to print something in the console in JavaScript?",
        options: [
          "console.write()",
          "print()",
          "console.log()",
          "document.write()",
        ],
        answer: "console.log()",
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size",
      },
      {
        question: "What does DOM stand for?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Document Order Model",
          "Display Object Mode",
        ],
        answer: "Document Object Model",
      },
      {
        question: "Which of the following is a JavaScript framework?",
        options: ["Laravel", "Django", "React", "Flask"],
        answer: "React",
      },
      {
        question: "Which of the following is a backend language?",
        options: ["HTML", "CSS", "Node.js", "XML"],
        answer: "Node.js",
      },
      {
        question: "In React, which hook is used for state management?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: "useState",
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style System",
          "Computer Styled Section",
          "Colorful Style Syntax",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which HTML element is used for the largest heading?",
        options: ["<h6>", "<head>", "<h1>", "<header>"],
        answer: "<h1>",
      },
    ],
  },
  {
    category: "SCIENCE",
    iconLink: scienceIcon,
    questions: [
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO2"],
        answer: "H2O",
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars",
      },
      {
        question:
          "What gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide",
      },
      {
        question: "Which part of the human body controls all activities?",
        options: ["Heart", "Brain", "Lungs", "Liver"],
        answer: "Brain",
      },
      {
        question: "What is the center of an atom called?",
        options: ["Proton", "Nucleus", "Electron", "Neutron"],
        answer: "Nucleus",
      },
      {
        question: "What is the speed of light?",
        options: [
          "300,000 kilometers per second",
          "150,000 kilometers per second",
          "100,000 kilometers per second",
          "500,000 kilometers per second",
        ],
        answer: "300,000 kilometers per second",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        answer: "Mercury",
      },
      {
        question: "What is the main gas found in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen",
      },
      {
        question: "Who proposed the theory of relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Niels Bohr",
        ],
        answer: "Albert Einstein",
      },
      {
        question:
          "Which vitamin is produced in the human body when exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Ribosome", "Mitochondria", "Nucleus", "Cytoplasm"],
        answer: "Mitochondria",
      },
      {
        question: "Which planet has the most moons?",
        options: ["Saturn", "Jupiter", "Mars", "Neptune"],
        answer: "Saturn",
      },
      {
        question: "Which organ in the human body purifies blood?",
        options: ["Liver", "Heart", "Kidney", "Lungs"],
        answer: "Kidney",
      },
      {
        question: "Which gas is essential for human respiration?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
        answer: "Oxygen",
      },
      {
        question: "What force keeps planets in orbit around the sun?",
        options: ["Electromagnetic force", "Gravity", "Friction", "Magnetism"],
        answer: "Gravity",
      },
    ],
  },
  {
    category: "GEOPOLITICS",
    iconLink: geopoliticsIcon,
    questions: [
      {
        question: "Which city is the headquarters of the United Nations?",
        options: ["Geneva", "Paris", "New York", "London"],
        answer: "New York",
      },
      {
        question:
          "Who is the current Secretary-General of the United Nations (as of 2025)?",
        options: [
          "Ban Ki-moon",
          "Antonio Guterres",
          "Kofi Annan",
          "Tedros Adhanom",
        ],
        answer: "Antonio Guterres",
      },
      {
        question: "Which country exited the European Union in 2020?",
        options: ["France", "Germany", "United Kingdom", "Italy"],
        answer: "United Kingdom",
      },
      {
        question: "What is the capital of Ukraine?",
        options: ["Moscow", "Kyiv", "Warsaw", "Minsk"],
        answer: "Kyiv",
      },
      {
        question:
          "Which two countries share the world’s longest international border?",
        options: [
          "Russia and China",
          "USA and Canada",
          "India and China",
          "Brazil and Argentina",
        ],
        answer: "USA and Canada",
      },
      {
        question: "Which organization is also known as NATO?",
        options: [
          "North Asian Treaty Organization",
          "North Atlantic Treaty Organization",
          "Northern Alliance Treaty Organization",
          "National Atlantic Treaty Organization",
        ],
        answer: "North Atlantic Treaty Organization",
      },
      {
        question: "Which country is the largest by land area?",
        options: ["China", "Russia", "Canada", "USA"],
        answer: "Russia",
      },
      {
        question: "Which country’s parliament is known as the ‘Diet’?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan",
      },
      {
        question: "Which continent has the most countries?",
        options: ["Asia", "Europe", "Africa", "South America"],
        answer: "Africa",
      },
      {
        question: "Which Asian country has the world’s largest democracy?",
        options: ["China", "India", "Japan", "Indonesia"],
        answer: "India",
      },
      {
        question:
          "Which European city is home to the headquarters of the European Union?",
        options: ["Berlin", "Brussels", "Paris", "Madrid"],
        answer: "Brussels",
      },
      {
        question: "What does G20 stand for?",
        options: [
          "Group of Twenty Nations",
          "Global Twenty",
          "Group of Top 20 Economies",
          "General Twenty",
        ],
        answer: "Group of Twenty Nations",
      },
      {
        question: "Which country is known for its policy of neutrality?",
        options: ["Germany", "Sweden", "Switzerland", "Norway"],
        answer: "Switzerland",
      },
      {
        question:
          "Which two countries are involved in the Taiwan Strait issue?",
        options: [
          "China and Japan",
          "China and Taiwan",
          "Japan and Korea",
          "USA and China",
        ],
        answer: "China and Taiwan",
      },
      {
        question: "Which country recently joined BRICS in 2024?",
        options: ["Argentina", "Saudi Arabia", "Mexico", "Turkey"],
        answer: "Saudi Arabia",
      },
    ],
  },
  {
    category: "MATHS",
    iconLink: mathsIcon,
    questions: [
      {
        question: "What is the value of π (pi) approximately?",
        options: ["3.141", "2.718", "1.618", "3.732"],
        answer: "3.141",
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        answer: "12",
      },
      {
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        answer: "30",
      },
      {
        question: "What is the next prime number after 7?",
        options: ["9", "10", "11", "13"],
        answer: "11",
      },
      {
        question: "What is the value of 7 × 8?",
        options: ["54", "56", "58", "64"],
        answer: "56",
      },
      {
        question: "If x + 5 = 12, what is x?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
      {
        question: "What is 0 factorial (0!) equal to?",
        options: ["0", "1", "-1", "Undefined"],
        answer: "1",
      },
      {
        question: "Which of these is a Pythagorean triplet?",
        options: ["3, 4, 5", "2, 3, 5", "5, 6, 8", "7, 8, 10"],
        answer: "3, 4, 5",
      },
      {
        question: "What is the sum of angles in a triangle?",
        options: ["180°", "90°", "360°", "270°"],
        answer: "180°",
      },
      {
        question: "What is the cube of 3?",
        options: ["6", "9", "27", "81"],
        answer: "27",
      },
      {
        question: "If y = 3x + 2, what is y when x = 4?",
        options: ["12", "14", "16", "18"],
        answer: "14",
      },
      {
        question: "What is the sum of the first 10 natural numbers?",
        options: ["45", "50", "55", "60"],
        answer: "55",
      },
      {
        question: "What is the area of a circle with radius 7?",
        options: ["154", "144", "169", "196"],
        answer: "154",
      },
      {
        question: "Which number is both a square and a cube?",
        options: ["8", "16", "64", "81"],
        answer: "64",
      },
      {
        question: "What is the solution to the equation 2x - 5 = 9?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
    ],
  },
  {
    category: "FINANCE",
    iconLink: financeIcon,
    questions: [
      {
        question: "What is the basic accounting equation?",
        options: [
          "Assets = Liabilities + Equity",
          "Assets = Revenue + Expenses",
          "Equity = Assets + Liabilities",
          "Revenue = Assets - Liabilities",
        ],
        answer: "Assets = Liabilities + Equity",
      },
      {
        question: "Which financial statement shows a company’s profit or loss?",
        options: [
          "Balance Sheet",
          "Income Statement",
          "Cash Flow Statement",
          "Equity Statement",
        ],
        answer: "Income Statement",
      },
      {
        question: "What does IPO stand for?",
        options: [
          "Initial Public Offering",
          "International Private Organization",
          "Initial Profit Option",
          "Internal Public Ownership",
        ],
        answer: "Initial Public Offering",
      },
      {
        question: "What is liquidity in finance?",
        options: [
          "Ability to buy stocks",
          "Ease of converting assets into cash",
          "Profit earned from investments",
          "Value of total assets",
        ],
        answer: "Ease of converting assets into cash",
      },
      {
        question: "Which of these is considered a risk-free investment?",
        options: [
          "Government Bonds",
          "Stocks",
          "Mutual Funds",
          "Corporate Bonds",
        ],
        answer: "Government Bonds",
      },
      {
        question: "What is the purpose of diversification in investing?",
        options: [
          "Increase risk",
          "Reduce risk",
          "Eliminate taxes",
          "Increase liquidity",
        ],
        answer: "Reduce risk",
      },
      {
        question:
          "Which index represents the 30 largest publicly traded companies in the USA?",
        options: [
          "NASDAQ",
          "S&P 500",
          "Dow Jones Industrial Average",
          "Russell 2000",
        ],
        answer: "Dow Jones Industrial Average",
      },
      {
        question:
          "What is the term for a prolonged decline in the stock market?",
        options: ["Bull Market", "Bear Market", "Correction", "Rally"],
        answer: "Bear Market",
      },
      {
        question:
          "Which financial ratio measures a company’s ability to pay short-term obligations?",
        options: [
          "Debt-to-Equity Ratio",
          "Current Ratio",
          "Return on Investment",
          "Price-to-Earnings Ratio",
        ],
        answer: "Current Ratio",
      },
      {
        question: "What is the main purpose of a central bank?",
        options: [
          "Print coins only",
          "Regulate currency and control monetary policy",
          "Control stock market prices",
          "Manage private banks only",
        ],
        answer: "Regulate currency and control monetary policy",
      },
      {
        question: "What is inflation?",
        options: [
          "Increase in prices over time",
          "Decrease in asset value",
          "Increase in income tax",
          "Decrease in currency circulation",
        ],
        answer: "Increase in prices over time",
      },
      {
        question: "Which of these is a debt instrument?",
        options: ["Stocks", "Bonds", "Mutual Funds", "Real Estate"],
        answer: "Bonds",
      },
      {
        question: "What does ROI stand for in finance?",
        options: [
          "Return on Investment",
          "Rate of Income",
          "Revenue of Interest",
          "Return on Interest",
        ],
        answer: "Return on Investment",
      },
      {
        question:
          "Which type of account typically offers the highest interest?",
        options: [
          "Savings Account",
          "Checking Account",
          "Fixed Deposit",
          "Current Account",
        ],
        answer: "Fixed Deposit",
      },
      {
        question: "What is the term for a sudden, sharp drop in stock prices?",
        options: ["Rally", "Crash", "Correction", "Bull Run"],
        answer: "Crash",
      },
    ],
  },
];
