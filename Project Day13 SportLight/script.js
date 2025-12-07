
        let modal = document.querySelector("#modal")
        let btn = document.querySelector("#modal button");
        let video = document.querySelector("video")
        let spotLight = document.querySelector("#spot-light");
        btn.addEventListener("click", () => {
            modal.style.display = "none";
            spotLight.style.display = "block";
            video.play()
        });
        document.addEventListener("mousemove", (dets) => {
            document.body.style.setProperty("--x", dets.clientX + "px")
            document.body.style.setProperty("--y", dets.clientY + "px")
        });
    