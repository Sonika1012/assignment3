function findPath(tickets) {
    const graph = buildGraph(tickets);
    const itinerary = [];
  
    // Start the itinerary from airport A
    backtrack("A", graph, itinerary);
  
    return itinerary;
  }
  
  function buildGraph(tickets) {
    const graph = {};
  
    for (const [from, to] of tickets) {
      if (!(from in graph)) {
        graph[from] = [];
      }
  
      graph[from].push(to);
    }
  
    
    for (const from in graph) {
      graph[from].sort();
    }
  
    return graph;
  }
  
  function backtrack(airport, graph, itinerary) {
    if (airport in graph) {
      while (graph[airport].length > 0) {
        const nextAirport = graph[airport].shift();
        backtrack(nextAirport, graph, itinerary);
      }
    }
  
    itinerary.unshift(airport); 
  }
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]]));
console.log(findPath([["A", "C"], ["A", "B"], ["C", "B"], ["B", "A"], ["B", "C"]])); 
console.log(findPath([["Y", "L"], ["D", "A"], ["A", "D"], ["R", "Y"], ["A", "R"]])); 
