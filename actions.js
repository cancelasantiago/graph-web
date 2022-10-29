function dist_a_b(x1, y1, x2, y2){
    var res = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2 - y1), 2));
    return res
}

function can_insert(x, y, children){
    let res = true;
    if ((x > 25)&&(x<475)&&(y>25)&&(y<475)){
        children.forEach(element => {
            let coords = element.getBoundingClientRect();
            d = dist_a_b(x, y, (coords.left + 25), (coords.top + 25));
            if (d < 55){
                res = false;
            }
        });
    }
    else res = false;
    return res;
}

function create_node(map){
    const parent = document.getElementById("main");
    const coord_x = map.event.clientX;
    const coord_y = map.event.clientY;

    const children = [].slice.call(parent.children);
    if (can_insert(coord_x, coord_y, children) == true){
        const node = document.createElement("div");
        node.classList.add("node");
        node.style.position = "absolute";
        node.style.left = (coord_x - 25)+'px';
        node.style.top = (coord_y - 25)+'px';
        parent.appendChild(node);
    }
}

function create_line(map){
    const x1 = map.event.clientX;
    const y1 = map.event.clientY;

    const x2 = 500;
    const y2 = 500;

    const parent = document.getElementById("main");

    d = dist_a_b(x1, y1, x2, y2);

    xMid = (x1+x2)/2;
    yMid = (y1+y2)/2;

    solapeInRadian = Math.atan2(y1 - y2, x1 - y2);
    solapeInDegrees = (solapeInRadian * 180) / Math.PI;

    line = document.createElement("div");
    line.classList.add("line");
    line.style.width = d+"px";
    line.style.top = yMid+"px";
    line.style.left = (xMid - (d/2))+"px";
    line.style.transform = "rotate("+solapeInDegrees+"deg)";

    parent.appendChild(line);
}