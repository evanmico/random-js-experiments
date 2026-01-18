// my initial bum-ass attempt at this shit
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
function _Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}
/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraphOG = (node) => {
    if (node === null) return null;

    const start = node;
    // build node queue
    // as soon as node gets on the queue, add its val to visited set
    const visitedSet = new Set([start.val]);
    // each time a node is added to the queue, maybe add to edge array that we go through later to rebuild map
    //let edges = [];
    const depMap = new Map();
    let head = 0;
    const nodeQueue = [start];
    while (head < nodeQueue.length) {
        const currNode = nodeQueue[head];

        for (neighbor of currNode.neighbors) {
            //edges.push([currNode, neighbor]);
            if (depMap.has(currNode.val)) {
                const tDeps = depMap.get(currNode.val);
                tDeps.push(neighbor.val);
                depMap.set(currNode.val, tDeps);
            } else {
                depMap.set(currNode.val, [neighbor.val]);
            }
            if (!visitedSet.has(neighbor.val)) {
                nodeQueue.push(neighbor);
                visitedSet.push(neighbor.val);
            }
        }
        head++;
    }

    // use edges array to rebuild graph
    const nodesSet = new Set();
    for (const [nodeVal, neighbors] of depMap) {
        for (let i = 0; i < neighbors.length; i++) {}
    }

    console.log(node.val);
    console.log(node.neighbors);
};

// my basically copy of another person's solution that uses BFS, but I feel like it does extra work, also seems a bit on the simple side, but that may be just my brain overcomplicating things
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = (node) => {
    // first check if the starting node is null
    if (node === null) return null;
    // copy node into a starting node of a new graph
    const start = node;
    // make a vertex map to store all of our nodes
    const vertexMap = new Map();
    // create a queue to track node traversal and head to point to head of queue (avoids unshift() method)
    const nodeQueue = [start];
    let head = 0;
    // put a clone of the start node into our vertexMap with the key of the start node
    // so ogNode, copyNode should be the way it goes
    vertexMap.set(start, new Node(start.val));

    // Do breadth-first search, going through each neighbor of a node and initializing a duplicate in vertexMap and also putting neighbors on the queue to put their neighbors in the vertexMap
    // basically, we first just clone the node into the map, likely without neighbors, then we add the neighbors by going to it and putting the neighbors, idk this explanation is wack
    while (head < nodeQueue.length) {
        // set the currentNode
        const currentNode = nodeQueue[head];
        // go through the neighbors of the current node and add them to map and add the connections to currentNode's duplicate in the map and also put the neighbors onto the nodeQueue to have THEIR neighbors added later
        for (const neighbor of currentNode.neighbors) {
            // check if we have already made a clone for this neighbor
            if (!vertexMap.has(neighbor)) {
                // add the neighbor to the vertexMap and make a clone of it into the vertex map if it doesn't have the neighbor already
                vertexMap.set(neighbor, new Node(neighbor.val));
                // we didn't add teh neighbors there, just initialized the node, gonna add those when we come across neighbor again in the queue
                nodeQueue.push(neighbor);
            }
            // put in the edge by adding the neighbor to the currentNode's neighbors
            // make sure that you put the clone of the neighbor into the clone of the currentNode's neighbors...
            vertexMap.get(currentNode).neighbors.push(vertexMap.get(neighbor));
        }
        head++;
    }
    // return the start node clone in our vertexMap
    return vertexMap.get(start);
};

// tbh, not completely sure how to call this one and then check it.
