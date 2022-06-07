displayLeaderboard = () => {
    let leaderboard = localStorage.getItem('leaderboard');
    leaderboard = JSON.parse(leaderboard)
    // Custom sort to check by value from an object
    leaderboard.sort((a,b) => {
        a = JSON.parse(a)
        b = JSON.parse(b)
        return b.score - a.score;
    });
    leaderboard.forEach(function(value,index){
        let container = document.getElementById("leaderboard")
        value = JSON.parse(value)
        container.innerHTML += `
            <li>Name: ${value.name}, Score: ${value.score}</li>
        `
    })
  }
  displayLeaderboard()

