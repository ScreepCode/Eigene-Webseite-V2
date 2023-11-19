async function getRepos(opts = {}) {
    let repos;
    let requestUrl = `https://api.github.com/users/ScreepCode/repos?type=owner`;
    // let requestUrl = "static/json/github_projects.json";
    await $.getJSON(requestUrl, function(data){
        repos = data;
    });

    return repos;
}

async function buildProjects(){
    const repos = await getRepos();
    for (var i = 0; i < repos.length; i++) {
        if(repos[i].name != "ScreepCode"){
            let element = document.getElementById("work_section"); 
            element.innerHTML += `
                <a href="${repos[i].html_url}" target="_blank" title="${repos[i].name} -> GitHub">
                <section>
                    <div class="section_title">${repos[i].name}</div>
                    <div class="about_section">
                        <span style="display:${repos[i].language == null ? "none" : "inline-block"};">${repos[i].description}</span>
                    </div>
                    <div class="bottom_section">
                        <span style="display:${repos[i].language == null ? "none" : "inline-block"};"><i class="fas fa-code"></i>&nbsp; ${repos[i].language}</span>
                        <span><i class="fas fa-star"></i>&nbsp; ${repos[i].stargazers_count}</span>
                        <span><i class="fas fa-code-branch"></i>&nbsp; ${repos[i].forks_count}</span>
                    </div>
                </section>
                </a>`;
        }
    }

    let magicProjectsGrid = new MagicGrid({
        container: document.getElementById("work_section"),
        static: true,
        gutter: 30,
        useMin: false,
        maxColumns: 2,
        useTransform: true
    });
    
    magicProjectsGrid.listen();
    magicProjectsGrid.positionItems();
}

buildProjects();