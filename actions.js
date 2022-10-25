function dist_a_b(x1, y1, x2, y2){
    var res = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2 - y1), 2));
    console.log(res)
    return res
}

function can_insert(x, y, children){
    let res = true;
    children.forEach(element => {
        let coords = element.getBoundingClientRect();
        d = dist_a_b(x, y, (coords.left + 25), (coords.top + 25));
        if (d < 50){
            res = false;
        }
    });
    return res;
}

function node(map){
    const parent = document.getElementById("main")
    const coord_x = map.event.clientX;
    const coord_y = map.event.clientY;

    const children = [].slice.call(parent.children);
    console.log(can_insert(coord_x, coord_y, children))
    if (can_insert(coord_x, coord_y, children) == true){
        console.log("entra a crear")
        const node = document.createElement("div");
        node.classList.add("node");
        node.style.position = "absolute";
        node.style.left = (coord_x - 25)+'px';
        node.style.top = (coord_y - 25)+'px';
        parent.appendChild(node);
    }
}