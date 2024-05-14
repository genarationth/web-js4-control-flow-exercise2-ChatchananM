let dayNumber = 6;

switch (true) {
  case dayNumber == 0:
    console.log(dayNumber, "= Sunday");
    break;
  case dayNumber == 1:
    console.log(dayNumber, "= Monday");
    break;
  case dayNumber == 2:
    console.log(dayNumber, "= Tuesday");
    break;
  case dayNumber == 3:
    console.log(dayNumber, "= Wednesday");
    break;
  case dayNumber == 4:
    console.log(dayNumber, "= Thursday");
    break;
  case dayNumber == 5:
    console.log(dayNumber, "= Friday");
    break;
  case dayNumber == 6:
    console.log(dayNumber, "= Saturday");
    break;
  default:
    console.log(dayNumber, " = Invalid day number");
}
