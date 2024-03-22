const dragArea = document.getElementById("dragArea");

const active = () => {
    dragArea.classList.add("active");
};

const inactive = () => {
    dragArea.classList.remove("active");
};


function activeDragArea(e) {
    e.preventDefault();
    ["dragenter", "dragover", "drop"].forEach((event) => {
      dragArea.addEventListener(event, active);
    });
    ["dragleave"].forEach((event) => {
      dragArea.addEventListener(event, inactive);
    });
}

["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
    dragArea.addEventListener(event, activeDragArea);
});

//dragArea.addEventListener("drop", handleDrop);
