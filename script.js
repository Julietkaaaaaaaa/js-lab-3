
(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  console.log("--- Перевірка на першу літеру 'J' ---");
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  // ДОДАТКОВИЙ ФУНКЦІОНАЛ
  console.log("\n--- Додатковий функціонал ---");
  console.log("Якщо ім'я закінчується на літеру 'a', програма прощається, інакше - вітається.");
  
  for (var j = 0; j < names.length; j++) {
    var currentName = names[j];
    var lastLetter = currentName.charAt(currentName.length - 1).toLowerCase();

    if (lastLetter === 'a') {
      byeSpeaker.speak(currentName);
    } else {
      helloSpeaker.speak(currentName);
    }
  }
})();
