$(document).ready(function () {
    $("#start-button").click(function () {

        var number = 60;
        alert("Lets get this party started");
        $(".startbutt").on("click", start);
        $("#submit").on("click", finish);


        function start() {
            //making timer decrease by one second
            counter = setInterval(timer, 1000);
            showMe(".question");
            showMe(".answers");
            showMe(".submit");
            hideMe(".startbutt");
            hideMe(".rules");
    
            
        }
        //appending timer to timer div on html
        function timer() {
            number--
            $(".timer").html(number);
            if (number === 0) {
                alert("Times Up!")
                stop();
            }

            //Not really sure how would I tell javascipt to check for the right answer after the sumbit button is clicked stuck on that part so far 
         //so far  i haave the fuction for the timer to start at 60 seconds and decrease by one second and when the timer hits 0 it will alert time is up
         //When you press start it will hide the rules and start button