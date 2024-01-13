var email;
// var baseUrl = 'https://demo5.smartranserp.com'
var baseUrl = 'http://localhost:8008'
$(document).ready(function () {

  var currentPath = window.location.href;;
  var encriptedEmail = currentPath.split('html?')[1];
  let data = {}
  data['encriptedEmail'] = encriptedEmail
  $(".loading").show();
  $(".mailMsg").hide();
  $("#mainlistBodyPage").hide();

  var isPwdData = JSON.parse(localStorage.getItem("isPwdData"));
  console.log(isPwdData);
  if (isPwdData && isPwdData.isPwd == 2) {

    pdfLoad(isPwdData.data);
  }
  else {
    if (isPwdData && isPwdData.isPwd == 1) {
      pwdFormLoad(isPwdData.data)
    }
    else {
      initEmailCheck();

    }
  }

  function initEmailCheck() {
    $.ajax({
      // url: 'http://localhost:8008/v1/sendPasswordandURLCheck',
      url: baseUrl + '/v1/sendPasswordandURLCheck',
      type: "POST",
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function successmsg(data) {
        console.log(data, "data")
        email = data.email;
        console.log(email, "em9")
        console.log(data.msg, "data");
        pwdFormLoad(data)

      },

      error: function (err) {

        console.log(err);

      }

    });
  }
  function pwdFormLoad(data) {
    if (data.msg == true) {
      localStorage.setItem("isPwdData", JSON.stringify({ isPwd: 1, email: data.email, data: data }));
      $(".loading").hide();
      $(".mailMsg").show();
      // if (data.data.isEmailSent == 2) {
      //   alert("password already set");
      // }
      // else {
      let passwordForm = `
        <div class="passForm">

								<div class="mb-3 passwordError">
									<label for="exampleInputPassword1" class="form-label">Enter Passcode</label>
									<input type="password" class="form-control" id="tncPassword">
								</div>  
                <div class="mailMsg mb-2">
                  Passcode has been sent to your email, Please verify  
                </div>
                

								<button type="submit" disabled class="btn btn-success savePass float-right" style="width:120px" onclick="passwordTNCCheck()">Submit</button>
            </div>
        `;
      $('#mainPage .centerHomeBody').html(passwordForm);
      loadform();
      // }






    }

    else {
      console.log(data.msg, "msg")
      $(".loading").hide();
      let linkPage = `
        <div class="passForm">
            <form class="linkExp">
            <p class="expLink"> Terms and Conditions link has been expired.</p>
                        <p class="expLink"> Compliance team will share new Terms and Conditions.</p>



								
							</form>
              </div>
        `;
      $('#mainPage .centerHomeBody').html(linkPage);
    }
  }


});
console.log(email, "e")

function loadform() {

  $('#tncPassword').on('input', function () {
    $(".mailMsg").hide();
    $(".mailPasswordMsg").hide();



    let tncPassword = $('#tncPassword').val()
    var submitButton = $('.savePass');

    if (tncPassword.length == 6) {
      submitButton.prop('disabled', false);
      $('.passwordError').find('small').remove()


    } else {
      submitButton.prop('disabled', true);
      $('.passwordError').find('small').remove()

      $('.passwordError').append(`<small class='text-danger'>  Please enter six digits passcode </small>`)
    }
  });
}

function passwordTNCCheck() {
  $(".loading").show();
  var pwdDataEmail = JSON.parse(localStorage.getItem("isPwdData")).email
  let d = {}
  d['tncPassword'] = $('#tncPassword').val()
  d['email'] = pwdDataEmail
  console.log(d, "d")


  $.ajax({
    // url: 'http://localhost:8008/v1/passwordCheck',
    url: baseUrl + '/v1/passwordCheck',

    type: "POST",
    data: JSON.stringify(d),
    contentType: 'application/json',
    success: function successmsg(data) {

      console.log(data.msg, "data");
      $(".loading").hide();
      localStorage.setItem("isPwdData", JSON.stringify({ isPwd: 2, email: pwdDataEmail, data: data }));
      pdfLoad(data);
    },

    error: function (err) {

      console.log(err);

    }

  });
}


function pdfLoad(data) {
  $(".loading").hide();
  if (data.msg == true) {

    $("#mainPage").hide();
    $("#mainlistBodyPage").show();

    loadTermsConditions(data)




  }
  else {
    let passwordForm = `
            <div class="passForm">

								<div class="mb-3 passwordError">
									<label for="exampleInputPassword1" class="form-label">Enter Passcode</label>
									<input type="password" class="form-control" id="tncPassword">
								</div>  
                <div class="mailPasswordMsg mb-2 text-danger">
                  Your Passcode is Incorrect 
                </div>
                

								<button type="submit" disabled class="btn btn-success savePass float-right" style="width:120px" onclick="passwordTNCCheck()">Submit</button>
            </div >
            `;
    $('#mainPage .centerHomeBody').html(passwordForm);
    loadform()
  }
}

function saveTermsandConditions(data) {

  $(".loading").show();


  console.log(data, "data22")

  var value = $('input[name="accept-decline"]:checked').val();
  console.log(value, "val")

  let d = {}
  d['id'] = data,
    d['tcAcceptorDeclineStatus'] = value == 'accept' ? 1 : 2


  $.ajax({
    // url: 'http://localhost:8008/v1/savePdf',
    url: baseUrl + '/v1/savePdf',


    type: "POST",
    data: JSON.stringify(d),
    contentType: 'application/json',
    success: function successmsg(data) {
      console.log(data, "data")
      if (data.msg == true) {
        $(".loading").hide();

        loadTermsConditions(data)
      }

    },

    error: function (err) {

      console.log(err);

    }

  });





};


function loadTermsConditions(data) {
  console.log(data, "d")

  localStorage.setItem("isPwdData", JSON.stringify({ isPwd: 2, email: data.email, data: data }));

  if (data.uData.clientType == 1) {

    if (data.clints) {
      let clints = data.clints
      let name = data.uData.firstName
      let tlist = `
        <div class="tlistBody">
        <div class="termsCondtions">
        <h4 class="mb-4">Terms and Conditions</h4>
        <p>1.Users acknowledges that this service is available only within the service area where indicated SSID Free Airport Wi-Fi by NT.</p>
       <p> 2.To access the service,users must register fill out personal information via SSID specified in item 1.</p>
       <p>3.Users can use the service continuously for 1 hour. When the time limit expires,the system will disconnect if the user wishes to continue using. Can register </p>
       <p>4.Users acknowledges that this service is available only within the service area where indicated SSID Free Airport Wi-Fi by NT.</p>
       <p>5.To access the service,users must register fill out personal information via SSID specified in item 1.</p>
       <p>6.Users can use the service continuously for 1 hour. When the time limit expires,the system will disconnect if the user wishes to continue using. Can register </p>
       <p>7.Users can use the service continuously for 1 hour. When the time limit expires,the system will disconnect if the user wishes to continue using. Can register </p>
       <p>8.Users acknowledges that this service is available only within the service area where indicated SSID Free Airport Wi-Fi by NT.</p>
       </div>
        <ul>
        `;

      clints.forEach(element => {
        tlist = tlist + `
            <li>${element.clintName}</li>
          `
      });

      tlist = tlist + `
          </ul>	
          </div>	
        `;


      tlist = tlist + `
        <div class="row mt-3">
          <div class="col-4"><p class="tName"> ${name}</p></div>`;
      if (data.uData.user.tcAcceptorDeclineStatus == 0) {


        tlist = tlist + ` <div class="col-4 d-flex tbtn">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="accept-decline" id="accept" value="accept">
              <label class="form-check-label" for="accept">
                Agree
              </label>
            </div>
            <div class="form-check ml-4">
              <input class="form-check-input" type="radio" name="accept-decline" id="decline" value="decline">
              <label class="form-check-label" for="decline">
                Deny
              </label>
            </div>
          </div>
          <div class="col-4">
            <button id="generatePDF" type="button"  class="btn btn-success float-right" onclick="saveTermsandConditions(`+ data.uData.id + `)">
              Submit
            </button>
          </div> `;
      }


      tlist = tlist + `   </div> `;


      $('#mainlistBodyPage .tcList').html(tlist);

    }

  } else {
    let name = data.uData.firstName
    let tlist = `
        <div class="tlistBody">
          <div class="termsCondtions">
            <h4 class="mb-4">Terms and Conditions</h4>
            <p>
              Terms and Conditions "Service" means the wireless internet access for public use from Internet Service Provider under the SSID Free Airport Wi-Fi by NT "Service Provider" means National Telecom Public Company Limited. (NT) and SKY ICT Public Company Limited "User" means a person both of Thai and foreigners who are eligible to access by registering with Wi-Fi of SSID provider.
            </p>
            <p>
              "Computer Data" means data, statements,or set of instructions contained in a computer system,the output of which may be processed by a computer system including electronic data,according to the Law of Electronic Transactions.
            </p> 
            </div>
            </div>`

    tlist = tlist + `
        <div class="row mt-3">
          <div class="col-4"><p class="tName"> ${name}</p></div>`;
    if (data.uData.user.tcAcceptorDeclineStatus == 0) {


      tlist = tlist + ` <div class="col-4 d-flex tbtn">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="accept-decline" id="accept" value="accept">
              <label class="form-check-label" for="accept">
                Accept
              </label>
            </div>
            <div class="form-check ml-4">
              <input class="form-check-input" type="radio" name="accept-decline" id="decline" value="decline">
              <label class="form-check-label" for="decline">
                Decline
              </label>
            </div>
          </div>
          <div class="col-4">
            <button id="generatePDF" type="button"  class="btn btn-success float-right" onclick="saveTermsandConditions(`+ data.uData.id + `)">
              Submit
            </button>
          </div> `;
    }


    tlist = tlist + `   </div> `;






    $('#mainlistBodyPage .tcList').html(tlist);

  }


}


