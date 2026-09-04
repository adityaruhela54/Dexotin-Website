/* =========================================================
   DEXOTIN TECHNOLOGY
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   JOB MANAGEMENT
========================================================= */

function loadJobs() {

    const jobList = document.getElementById("job-list");

    if (!jobList) {
        return;
    }


    /* ---------------------------------------------
       NO ACTIVE JOBS
    --------------------------------------------- */

    if (
        typeof dexotinJobs === "undefined" ||
        dexotinJobs.length === 0
    ) {

        jobList.innerHTML = `

            <div class="no-jobs">

                <div class="no-jobs-icon">

                    <i class="bi bi-briefcase"></i>

                </div>

                <h4>
                    No Open Positions Right Now
                </h4>

                <p>
                    We don't have any active openings at the moment,
                    but we're always interested in meeting talented
                    technology professionals.
                </p>

                <a
                    href="mailto:careers@dexotin.com"
                    class="btn btn-outline-custom">

                    Submit Your Profile

                    <i class="bi bi-arrow-right ms-2"></i>

                </a>

            </div>

        `;

        return;
    }


    /* ---------------------------------------------
       GENERATE JOB CARDS
    --------------------------------------------- */

    jobList.innerHTML = dexotinJobs.map((job, index) => {

        return `

            <div class="job-card">

                <div class="job-card-main">

                    <div class="job-icon">

                        <i class="bi bi-briefcase"></i>

                    </div>


                    <div class="job-information">

                        <span class="job-department">
                            ${job.department}
                        </span>

                        <h4>
                            ${job.title}
                        </h4>

                        <div class="job-meta">

                            <span>
                                <i class="bi bi-geo-alt"></i>
                                ${job.location}
                            </span>

                            <span>
                                <i class="bi bi-clock"></i>
                                ${job.type}
                            </span>

                            <span>
                                <i class="bi bi-person"></i>
                                ${job.experience}
                            </span>

                        </div>

                    </div>

                </div>


                <a
                    href="mailto:careers@dexotin.com?subject=Application - ${encodeURIComponent(job.title)}"
                    class="job-apply">

                    Apply Now

                    <i class="bi bi-arrow-up-right"></i>

                </a>

            </div>

        `;

    }).join("");

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadJobs();

        console.log(
            "Dexotin Technology website initialized."
        );

    }
);

/* =========================================================
   BUSINESS ENQUIRY FORM
========================================================= */

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("visitorName").value.trim();

            const company =
                document.getElementById("companyName").value.trim();

            const email =
                document.getElementById("visitorEmail").value.trim();

            const phone =
                document.getElementById("visitorPhone").value.trim();

            const requirement =
                document.getElementById("requirementType").value;

            const message =
                document.getElementById("visitorMessage").value.trim();


            const subject =
                `Business Enquiry - ${requirement}`;


            const body =
`Hello Dexotin Technology Team,

I would like to discuss a business requirement.

Name: ${name}

Company: ${company || "Not provided"}

Business Email: ${email}

Phone: ${phone || "Not provided"}

Requirement: ${requirement}

Message:
${message}

Regards,
${name}
`;


            const mailtoLink =
                `mailto:business@dexotin.com` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;


            window.location.href = mailtoLink;

        }
    );

}