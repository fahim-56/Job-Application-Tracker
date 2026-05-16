// console.log("machine.js connected");

// ALL type of job list variables
const all = document.getElementById("all-job-list");
const interview = document.getElementById("interview-job-list");
const rejected = document.getElementById("rejected-job-list");

// console.log(all.children.length, interview.children.length, rejected.children.length);

// Initially, only the all job list will be visible
all.style.display = "block";
interview.style.display = "none";
rejected.style.display = "none";


// Tabs variables
const allTabsBtn = document.getElementById("all-tabs-btn");
const interviewTabsBtn = document.getElementById("interview-tabs-btn");
const rejectedTabsBtn = document.getElementById("rejected-tabs-btn");


// Classes for active and inactive tabs in array for easily add and remove them
const inactiveTab = ["btn", "bg-white", "border", "border-slate-200", "text-slate-600"];
const activeTab = ["btn", "bg-blue-700", "border", "border-slate-200", "text-white"];

// Initially, the all tab will be active and other two will be inactive
allTabsBtn.classList.add(...activeTab);
interviewTabsBtn.classList.add(...inactiveTab);
rejectedTabsBtn.classList.add(...inactiveTab);

// Function to change the page according to the tab clicked
function pageChange(id) {
    let element = document.getElementById(id);

    // hide all job lists
    all.style.display = "none";
    interview.style.display = "none";
    rejected.style.display = "none";

    // inactive all tabs
    allTabsBtn.classList.remove(...activeTab);
    allTabsBtn.classList.add(...inactiveTab);
    interviewTabsBtn.classList.remove(...activeTab);
    interviewTabsBtn.classList.add(...inactiveTab);
    rejectedTabsBtn.classList.remove(...activeTab);
    rejectedTabsBtn.classList.add(...inactiveTab);


    // show the job list according to the id and active the tab
    if (id === "all-job-list") {
        all.style.display = "block";
        // console.log("Main page");

        allTabsBtn.classList.remove(...inactiveTab);
        allTabsBtn.classList.add(...activeTab);
    }
    else if (id === "interview-job-list") {
        interview.style.display = "block";
        // console.log("Interview page");

        interviewTabsBtn.classList.remove(...inactiveTab);
        interviewTabsBtn.classList.add(...activeTab);
    }
    else if (id === "rejected-job-list") {
        rejected.style.display = "block";
        // console.log("Rejected page");

        rejectedTabsBtn.classList.remove(...inactiveTab);
        rejectedTabsBtn.classList.add(...activeTab);
    }

}


function updateCount() {

    const allCount = document.getElementById("all-count");
    const interviewCount = document.getElementById("interview-count");
    const rejectedCount = document.getElementById("rejected-count");


    // Set the count of the jobs in each list
    allCount.innerText = all.children.length;
    interviewCount.innerText = interview.children.length;
    rejectedCount.innerText = rejected.children.length;


    // If any item list become empty then add empty content
    if (all.children.length === 0) {
        all.innerHTML = `<div id="No-job-list" class="content-center text-center">
                <img class="mx-auto" src="./asset/jobs.png" alt="no-jobs-image">
                <h1 class="text-2xl font-bold">
                    No jobs available
                </h1>
                <p class="text-slate-600">Check back soon for new job opportunities</p>
            </div>`;
    }

    if (interview.children.length === 0) {
        interview.innerHTML = `<div id="No-job-list" class="content-center text-center">
                <img class="mx-auto" src="./asset/jobs.png" alt="no-jobs-image">
                <h1 class="text-2xl font-bold">
                    No jobs available
                </h1>
                <p class="text-slate-600">Check back soon for new job opportunities</p>
            </div>`;
    }
    if (rejected.children.length === 0) {
        rejected.innerHTML = `<div id="No-job-list" class="content-center text-center">
                <img class="mx-auto" src="./asset/jobs.png" alt="no-jobs-image">
                <h1 class="text-2xl font-bold">
                    No jobs available
                </h1>
                <p class="text-slate-600">Check back soon for new job opportunities</p>
            </div>`;
    }


    // If the job list is empty, then show the no jobs available message and set the count to 0
    if (all.children[0].id === "No-job-list") {
        allCount.innerText = '0';
    }

    if (interview.children[0].id === "No-job-list") {
        interviewCount.innerText = '0';
    }
    console.log(rejected.children[0].id);
    if (rejected.children[0].id === "No-job-list") {
        rejectedCount.innerText = '0';
    }
}

updateCount();
// Click event listener for the all job list to move the job item to interview or rejected list or delete the job item or vice versa
document.getElementById("all-job-list").addEventListener("click", function (event) {
    // console.log(event.target.parentNode.parentNode);

    if (event.target.classList.contains("interview-btn")) {
        const jobItem = event.target.parentNode.parentNode;
        // console.log(jobItem);
        if (interview.children[0].id === "No-job-list") {
            interview.innerHTML = "";
        }
        // document.getElementById("action-name").innerHTML = `<span class="bg-slate-100 border-none px-4 py-2 rounded-md">INTERVIEW</span>`;

        for (let i = 0; i < jobItem.children.length; i++) {
            if (jobItem.children[i].classList.contains("action-name")) {
                if (jobItem.children[i].children[0].classList.contains("interview-enable")) {
                    return;
                }
                else {
                    jobItem.children[i].innerHTML = `<span class="interview-enable btn btn-outline btn-success bg-green-400 text-white">INTERVIEW</span>`;
                }
            }
        }
        const newJob = jobItem.cloneNode(true);
        interview.appendChild(newJob);
        // pageChange("interview-job-list");
    }

    if (event.target.classList.contains("rejected-btn")) {
        const jobItem = event.target.parentNode.parentNode;
        // console.log(jobItem);
        if (rejected.children[0].id === "No-job-list") {
            rejected.innerHTML = "";
        }

        for (let i = 0; i < jobItem.children.length; i++) {
            if (jobItem.children[i].classList.contains("action-name")) {
                if (jobItem.children[i].children[0].classList.contains("rejected-enable")) {
                    return;
                }
                else {
                    jobItem.children[i].innerHTML = `<span class="rejected-enable btn btn-outline btn-error bg-red-400 text-white">REJECTED</span>`;
                }
            }
        }

        const newJob = jobItem.cloneNode(true);
        rejected.appendChild(newJob);
        // pageChange("rejected-job-list");
    }

    if (event.target.classList.contains("delete-btn")) {
        const jobItem = event.target.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        pageChange("all-job-list");
    }
    if (event.target.classList.contains("delete-btn-i")) {
        const jobItem = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        pageChange("all-job-list");
    }


    updateCount();

});



// Click event listener for the interview job list to move the job item to interview or rejected list or delete the job item or vice versa
document.getElementById("interview-job-list").addEventListener("click", function (event) {
    // console.log(event.target.parentNode.parentNode);

    if (event.target.classList.contains("rejected-btn")) {
        const jobItem = event.target.parentNode.parentNode;
        // console.log(jobItem);
        if (rejected.children[0].id === "No-job-list") {
            rejected.innerHTML = "";
        }
        
        rejected.appendChild(jobItem);
        pageChange("rejected-job-list");
    }

    if (event.target.classList.contains("delete-btn")) {
        const jobItem = event.target.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        pageChange("interview-job-list");
    }
    if (event.target.classList.contains("delete-btn-i")) {
        const jobItem = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        pageChange("interview-job-list");
    }


    updateCount();
});


// Click event listener for the rejected job list to move the job item to interview or rejected list or delete the job item or vice versa
document.getElementById("rejected-job-list").addEventListener("click", function (event) {
    // console.log(event.target.parentNode.parentNode);

    if (event.target.classList.contains("interview-btn")) {
        const jobItem = event.target.parentNode.parentNode;
        // console.log(jobItem);
        if (interview.children[0].id === "No-job-list") {
            interview.innerHTML = "";
        }
        
        interview.appendChild(jobItem);
        pageChange("interview-job-list");
    }



    if (event.target.classList.contains("delete-btn")) {
        const jobItem = event.target.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        pageChange("rejected-job-list");
    }
    if (event.target.classList.contains("delete-btn-i")) {
        const jobItem = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        pageChange("rejected-job-list");
    }

    updateCount();
});