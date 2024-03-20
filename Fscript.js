function day() {
      var sel = document.getElementById("f").selected;
      if (sel === true) {
            function give() {
                  var interval = setInterval(function () {
                        var currentDate = new Date();
                        // For Monday
                        if (true)
                              window.location.href = "index1.html"
                  }, 1000);
            }
            give()
      }
      else {
            console.log("Not my division")
      }
}