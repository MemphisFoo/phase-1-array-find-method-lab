//code your solution here
superbowlWin = (record) =>{
    const result = record.find(record => record.result === "W")
    return !! result? result.year: undefined;
}


/*function superbowlWin(record){
    for(let item of record)
    if(record.result === "W"){
        return (record.year)}
    else if(record.result !== "W"){
    return 'undefined'}};
    */
