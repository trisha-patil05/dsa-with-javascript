/**
 * =============================================
 * 📌 Topic     : Conditional Statements — Switch Case
 * 🔢 Problem   : Day of the Week Checker
 * ⚡ Difficulty : Easy
 * =============================================
 * ⚠️  Note:
 *  switch-case CANNOT handle float values due to
 *  floating point precision issues. Use if-else instead.
 *
 * 🧪 Examples:
 *  Input : "abc" → "Please enter a valid number"
 *  Input : 3     → "Wednesday"
 *  Input : 7     → "Sunday"
 *  Input : 9     → "Invalid day number"
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

// ─────────────────────────────────────────────
// Example 1: Day of the Week
// ─────────────────────────────────────────────

let day = Number(prompt("Enter day number (1-7): "));

if (isNaN(day)) {
  console.log("Please enter a valid number.");
} else {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number.");
  }
}

// ─────────────────────────────────────────────
// Example 2: One Case Handling Multiple Values
//            (Days in a Month)
// ─────────────────────────────────────────────

let month = Number(prompt("Enter month number (1-12): "));

if (isNaN(month)) {
  console.log("Please enter a valid number.");
} else {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 days");
      break;
    case 2:
      console.log("28 or 29 days (leap year)");
      break;
    default:
      console.log("Invalid month number.");
  }
}

