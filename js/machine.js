const all = document.getElementById("all-job-list");
const interview = document.getElementById("interview-job-list");
const rejected = document.getElementById("rejected-job-list");

all.style.display = "block";
interview.style.display = "none";
rejected.style.display = "none";

const allTabsBtn = document.getElementById("all-tabs-btn");
const interviewTabsBtn = document.getElementById("interview-tabs-btn");
const rejectedTabsBtn = document.getElementById("rejected-tabs-btn");

const inactiveTab = ["btn", "bg-white", "border", "border-slate-200", "text-slate-600"];
const activeTab = ["btn", "bg-blue-700", "border", "border-slate-200", "text-white"];

allTabsBtn.classList.add(...activeTab);
interviewTabsBtn.classList.add(...inactiveTab);
rejectedTabsBtn.classList.add(...inactiveTab);


const allCount = document.getElementById("all-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");


function pageChange(id) {
    let element = document.getElementById(id);

    all.style.display = "none";
    interview.style.display = "none";
    rejected.style.display = "none";

    allTabsBtn.classList.remove(...activeTab);
    allTabsBtn.classList.add(...inactiveTab);
    interviewTabsBtn.classList.remove(...activeTab);
    interviewTabsBtn.classList.add(...inactiveTab);
    rejectedTabsBtn.classList.remove(...activeTab);
    rejectedTabsBtn.classList.add(...inactiveTab);


    if (id === "all-job-list") {
        all.style.display = "block";

        allTabsBtn.classList.remove(...inactiveTab);
        allTabsBtn.classList.add(...activeTab);
        document.getElementById("available-jobs-count").innerText = allCount.innerText;
    }
    else if (id === "interview-job-list") {
        interview.style.display = "block";

        interviewTabsBtn.classList.remove(...inactiveTab);
        interviewTabsBtn.classList.add(...activeTab);
        document.getElementById("available-jobs-count").innerText = interviewCount.innerText + " of " + allCount.innerText + " jobs";
    }
    else if (id === "rejected-job-list") {
        rejected.style.display = "block";

        rejectedTabsBtn.classList.remove(...inactiveTab);
        rejectedTabsBtn.classList.add(...activeTab);
        document.getElementById("available-jobs-count").innerText = rejectedCount.innerText + " of " + allCount.innerText + " jobs";
    }


}


function updateCount() {

    allCount.innerText = all.children.length;
    interviewCount.innerText = interview.children.length;
    rejectedCount.innerText = rejected.children.length;

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
    totalJobsCount = parseInt(allCount.innerText) + parseInt(interviewCount.innerText) + parseInt(rejectedCount.innerText);

}

updateCount();
document.getElementById("all-job-list").addEventListener("click", function (event) {

    if (event.target.classList.contains("interview-btn")) {
        console.log("Interview button clicked");
        const jobItem = event.target.parentNode.parentNode;

        if (interview.children[0].id === "No-job-list") {
            interview.innerHTML = "";
        }

        for (let i = 0; i < jobItem.children.length; i++) {
            if (jobItem.children[i].classList.contains("action-name")) {
                if (jobItem.children[i].children[0].classList.contains("interview-enable")) {
                    return;
                }
                else if (jobItem.children[i].children[0].classList.contains("rejected-enable")) {
                    // If the job item is already in the rejected list, then remove the rejected class and add the interview class
                    jobItem.children[i].children[0].classList.remove("rejected-enable");



                    jobItem.children[i].innerHTML = `<span class="interview-enable btn btn-outline btn-success bg-green-400 text-white">INTERVIEW</span>`;
                }
                else {
                    jobItem.children[i].innerHTML = `<span class="interview-enable btn btn-outline btn-success bg-green-400 text-white">INTERVIEW</span>`;
                }
            }
        }

        interview.appendChild(jobItem);
    }

    if (event.target.classList.contains("rejected-btn")) {
        console.log("Rejected button clicked");
        const jobItem = event.target.parentNode.parentNode;

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

        // const newJob = jobItem.cloneNode(true);
        rejected.appendChild(jobItem);
        // pageChange("rejected-job-list");
    }

    if (event.target.classList.contains("delete-btn")) {
        const jobItem = event.target.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        updateCount();
        pageChange("all-job-list");
    }
    if (event.target.classList.contains("delete-btn-i")) {
        const jobItem = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        updateCount();
        pageChange("all-job-list");
    }



    updateCount();

});



// Click event listener for the interview job list to move the job item to interview or rejected list or delete the job item or vice versa
document.getElementById("interview-job-list").addEventListener("click", function (event) {
    // console.log(event.target.parentNode.parentNode);

    if (event.target.classList.contains("rejected-btn")) {
        console.log("Rejected button clicked");
        const jobItem = event.target.parentNode.parentNode;

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

        // const newJob = jobItem.cloneNode(true);
        rejected.appendChild(jobItem);
        // pageChange("rejected-job-list");
    }

    if (event.target.classList.contains("delete-btn")) {
        const jobItem = event.target.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        updateCount();
        pageChange("interview-job-list");
    }
    if (event.target.classList.contains("delete-btn-i")) {
        const jobItem = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        updateCount();
        pageChange("interview-job-list");
    }


    updateCount();
});


// Click event listener for the rejected job list to move the job item to interview or rejected list or delete the job item or vice versa
document.getElementById("rejected-job-list").addEventListener("click", function (event) {
    // console.log(event.target.parentNode.parentNode);

    if (event.target.classList.contains("interview-btn")) {
        console.log("Interview button clicked");
        const jobItem = event.target.parentNode.parentNode;

        if (interview.children[0].id === "No-job-list") {
            interview.innerHTML = "";
        }

        for (let i = 0; i < jobItem.children.length; i++) {
            if (jobItem.children[i].classList.contains("action-name")) {
                if (jobItem.children[i].children[0].classList.contains("interview-enable")) {
                    return;
                }
                else if (jobItem.children[i].children[0].classList.contains("rejected-enable")) {

                    jobItem.children[i].children[0].classList.remove("rejected-enable");

                    jobItem.children[i].innerHTML = `<span class="interview-enable btn btn-outline btn-success bg-green-400 text-white">INTERVIEW</span>`;
                }
                else {
                    jobItem.children[i].innerHTML = `<span class="interview-enable btn btn-outline btn-success bg-green-400 text-white">INTERVIEW</span>`;
                }
            }
        }

        interview.appendChild(jobItem);
    }



    if (event.target.classList.contains("delete-btn")) {
        const jobItem = event.target.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        updateCount();
        pageChange("rejected-job-list");
    }
    if (event.target.classList.contains("delete-btn-i")) {
        const jobItem = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(jobItem);
        jobItem.remove();
        updateCount();
        pageChange("rejected-job-list");
    }

    updateCount();
});