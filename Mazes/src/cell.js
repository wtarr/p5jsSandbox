class Cell {
    constructor(x, y, width) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + width;
        this.y2 = y + width;
        this.width = width;
                
        this.northwall = true;
        this.southwall = true;
        this.westwall = true;
        this.eastwall = true;

        this.reachable = [];
    }
   

    draw() {
        //square(this.x1, this.y1, this.width);
        // _ north
        if (this.northwall)
        {
            line(this.x1, this.y1, this.x1 + this.width, this.y1);
        }
        // | west
        if (this.westwall)
        {
            line(this.x1, this.y1, this.x1, this.y1+this.width);
        }
        // _ south
        if (this.southwall)
        {
            line(this.x1, this.y1+this.width, this.x2, this.y2);
        }
        // | east
        if (this.eastwall)
        {
            line(this.x2, this.y2,this.x2, this.y2-this.width);
        }
    }
}