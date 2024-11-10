let participantNum = 1;
function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input class="fee-input" id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select name="grade${count}">
                    <option value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
}
function addParticipant () {
    participantNum += 1
    document.querySelector(".participants").insertAdjacentHTML('beforeend', participantTemplate(participantNum));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("add").addEventListener("click", addParticipant);
});



function submitForm(event) {
    event.preventDefault();
    const allFees = document.querySelectorAll('.fee-input');
    let feeTotal = 0
    allFees.forEach(fee => {
        feeTotal += parseFloat(fee.value) || 0; //AI helped me with all of this function
    });
    const adultName = document.getElementById("adult_name").value;
    
    document.querySelector("form").classList.add("hide");

    const summery = document.getElementById("summary");
    summery.innerHTML= `Thank you ${adultName} for registering. You have registered ${participantNum} participants and owe $${feeTotal.toFixed(2)} in Fees.`;
}

document.querySelector("form").addEventListener("submit", submitForm)