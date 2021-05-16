let grid = [];
const numCells = 10;
const cellWidth = 30;
const startX = 10;
const startY = 10;

function setup() {
    createCanvas(400, 400);
    // 4 x 4 grid
    //
    // 0 [ [0, 1, 2, 3],
    // 1   [0, 1, 2, 3],
    // 2   [0, 1, 2, 3],
    // 4   [0, 1, 2, 3] ]

    // array of array
    let ycoord = startY;
    

    for (let y = 0; y < numCells; y++)
    {
        let xcoord = startX;
        let array = [];
        for (let x = 0; x < numCells; x++ )
        {          
            let cell = new Cell(xcoord, ycoord, cellWidth);             
            array.push(cell);
            xcoord += cellWidth;
        }

        grid.push(array);

        ycoord += cellWidth;
    }

    //console.log(this.grid);

    carveWalls();
}

function carveWalls() {
    
    let coin = ['heads', 'tails'];
    
    for (let y = 0; y < numCells; y++)
    {       
        for (let x = 0; x < numCells; x++ )
        {            
            let toss = random(coin);
            
            let current = grid[y][x];

            if (toss == 'heads')
            {
                // carve north wall as long as not top row
                // 0
                // 1
                // 2
                // 3
                                                
                if (y > 0)
                {                    
                    current.northwall = false;                    
                    if (y-1 >= 0)
                    {
                        let neigbhour = grid[y-1][x];

                        neigbhour.southwall = false;

                        current.reachable.push(neigbhour);
                        neigbhour.reachable.push(current);
                    }
                }
                else
                {
                    // do the east wall
                    // west east
                    // 0, 1, 2, 3
                    if (x < numCells - 1)
                    {
                        current.eastwall = false;
                        if (x + 1 > 0)
                        {
                            let neigbhour = grid[y][x + 1];

                            neigbhour.westwall = false;

                            current.reachable.push(neigbhour);
                            neigbhour.reachable.push(current);
                        }
                    }
                }

            }
            else
            {
                // carve east wall as long as not on last column
                // 0, 1, 2, 3
                if (x < numCells - 1)
                {
                    // do the east wall
                    // west east
                    // 0, 1, 2, 3
                    if (x < numCells - 1)
                    {
                        current.eastwall = false;
                        if (x + 1 > 0)
                        {
                            let neigbhour = grid[y][x + 1];
                            neigbhour.westwall = false;

                            current.reachable.push(neigbhour);
                            neigbhour.reachable.push(current);
                        }
                    }
                }
                else
                {
                    if (y > 0)
                    {
                        current.northwall = false;
                        if (y-1 >= 0)
                        {
                            let neigbhour = grid[y-1][x];
                            neigbhour.southwall = false;

                            current.reachable.push(neigbhour);
                            neigbhour.reachable.push(current);
                        }
                    }
                }

            }


        }        
    }  
}

function draw() {

    for (let y = 0; y < numCells; y++)
    {       
        for (let x = 0; x < numCells; x++ )
        {   
            let current = grid[y][x];         
            current.draw();
        }        
    }  
}