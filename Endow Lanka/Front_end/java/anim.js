$(document).ready(function () {

        // Fade + slide in animation
        $("form").fadeIn(800).animate({ top: "0px" }, 500);

        // Button click animation
        $("button").on("mousedown", function () {
            $(this).css("transform", "scale(0.95)");
        }).on("mouseup", function () {
            $(this).css("transform", "scale(1)");
        });

    });

    function Dashboard() {
        event.preventDefault();

        let user = $("#username").val();
        let pass = $("#password").val();

        if (user === "" || pass === "") {
            $("form").addClass("shake");
            setTimeout(() => {
                $("form").removeClass("shake");
            }, 400);
        } else {
            alert("Login Successful 🚀");
            // window.location.href = "dashboard.html";
    }
}
