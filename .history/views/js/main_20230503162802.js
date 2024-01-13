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
  console.log(isPwdData, "first");
  if (isPwdData && isPwdData.isPwd == 2) {
    console.log("1 check")
    pdfLoad(isPwdData.data);
  }
  else {
    if (isPwdData && isPwdData.isPwd == 1) {
      pwdFormLoad(isPwdData.data)
      console.log("2 check")
    }
    else {
      console.log("3 check")

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
        email = data.email;

        pwdFormLoad(data)

      },

      error: function (err) {

        console.log(err);

      }

    });
  }
  function pwdFormLoad(data) {
    if (data.msg == true) {
      localStorage.setItem("isPwdData", JSON.stringify({ isPwd: 1, data: data }));
      $(".loading").hide();
      $(".mailMsg").show();

      let passwordForm = `
        <div class="passForm">

								<div class="mb-3 passwordError">
									<label for="exampleInputPassword1" class="form-label">Enter Passcode</label>
									<input type="password" class="form-control" id="tncPassword" placeholder='Enter Passcode'>
								</div>  
                <div class="mailMsg mb-2">
               <i class="fa fa-eye" aria-hidden="true"></i>
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
      $(".loading").hide();
      if (data.error == 'Already Accept TC') {
        loadTermsConditions(data)
      } else {
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
  }


});

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
  var pwdDataEmail = JSON.parse(localStorage.getItem("isPwdData")).data.email
  console.log(pwdDataEmail, "pass word check")
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

      $(".loading").hide();
      localStorage.setItem("isPwdData", JSON.stringify({ isPwd: 2, data: data }));
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
									<input type="password" class="form-control" id="tncPassword" placeholder='Enter Passcode'>
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



  var value = $('input[name="accept-decline"]:checked').val();

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
      if (data.msg == true) {
        localStorage.clear();
        localStorage.removeItem('isPwdData');
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

  console.log(data, "data")



  // localStorage.setItem("isPwdData", JSON.stringify({ isPwd: 2, email: data.email, data: data }));




  if (data.clientType == 1) {

    if (data.clints) {
      let clints = data.clints
      let name = `${data.firstName} ${data.lastName}`
      let tlist = `
        <div class="tlistBody">
        <div class="termsCondtions">
        <h4 class="mb-4">Terms and Conditions</h4>
        <p>This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.</p>
        <p>The Zedra Company which is engaged to provide the Services to you is the controller of your personal data and determines the purposes and means by which your personal data is processed and is ultimately responsible for the processing of that personal data. The controller may appoint a third party to process your personal data, including another Zedra Company, which will process that personal data on the instructions of the controller, and will be placed under a duty of confidentiality and obliged to implement appropriate technical and organisational measures to ensure the security of your data.  In certain circumstances, there may be joint controllers who will agree their respective responsibilities for compliance with the Law including which controller is obliged to respond to a data subject who wishes to exercise any rights under the Law, although the data subject may exercise any rights against either controller.<p/>

        <p>If you wish to receive details regarding the controller and any third party that has been engaged to assist the controller in delivering services to you and with whom the controller may have shared your personal data, or of any joint controllers, and the arrangements made between the joint controllers to comply with the Law, please contact the Data Protection Officer. </p>

        

        <p>We may amend this Privacy Notice from time to time to reflect any changes in the way that we process your personal data, and the current Privacy Notice will always be available on our website. This Privacy Notice supersedes any previous privacy notice with which you may have been provided, as well as anything to the contrary contained in any agreement between us.
        </p>

        <p>You may object at any time to our processing of any or all of your personal data on this ground by contacting the Data Protection Officer and the processing of personal data may be restricted while those legitimate interests are considered, and, if it is decided that we do not have a legitimate interest to process that personal data, can be erased.

Under the Law, certain kinds of personal data such as data relating to health, racial or ethnic origin, political opinions, religious and philosophical beliefs, trade union membership, genetic or biometric data, sex life or sexual orientation is considered to be a special category of personal data (“Special Data”) and can only be processed in certain circumstances, including with your explicit consent.  We will only process any Special Data with your explicit consent.  Special Data will be processed for the same purposes and shared with the same entities as personal data processed in our legitimate interests. You will be asked to complete a consent form to evidence that your explicit consent has been given to the processing of Special Data. This consent can be withdrawn at any time by contacting the Data Protection Officer who will advise you of the procedure to be followed in order to withdraw your consent to the processing of Special Data The withdrawal of your consent will not affect the lawfulness of any processing up to that point.  However, if your consent is withdrawn, the nature of the Services may mean that we can no longer provide some or all of the Services to you.</p>
      
       </div>
       <div><h4>Clients </h4><div>
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
          <div class="col-sm-12 col-md-4"><p class="tName"> ${name}</p></div>`;
      if (data.uData.user.tcAcceptorDeclineStatus == 0) {


        tlist = tlist + ` <div class="col-sm-12 col-md-4 d-flex tbtn">
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
          <div class="col-sm-12 col-md-4">
            <button id="generatePDF" type="button"  class="btn btn-success float-right" onclick="saveTermsandConditions(`+ data.id + `)">
              Submit
            </button>
          </div> `;
      }


      tlist = tlist + `   </div> `;


      $('#mainlistBodyPage .tcList').html(tlist);

    }

  } else {
    let name = `${data.firstName} ${data.lastName}`
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
             <p>The Zedra Company which is engaged to provide the Services to you is the controller of your personal data and determines the purposes and means by which your personal data is processed and is ultimately responsible for the processing of that personal data. The controller may appoint a third party to process your personal data, including another Zedra Company, which will process that personal data on the instructions of the controller, and will be placed under a duty of confidentiality and obliged to implement appropriate technical and organisational measures to ensure the security of your data.  In certain circumstances, there may be joint controllers who will agree their respective responsibilities for compliance with the Law including which controller is obliged to respond to a data subject who wishes to exercise any rights under the Law, although the data subject may exercise any rights against either controller.<p/>

        <p>If you wish to receive details regarding the controller and any third party that has been engaged to assist the controller in delivering services to you and with whom the controller may have shared your personal data, or of any joint controllers, and the arrangements made between the joint controllers to comply with the Law, please contact the Data Protection Officer. </p>

        

        <p>We may amend this Privacy Notice from time to time to reflect any changes in the way that we process your personal data, and the current Privacy Notice will always be available on our website. This Privacy Notice supersedes any previous privacy notice with which you may have been provided, as well as anything to the contrary contained in any agreement between us.
        </p>

            </div>
            </div>`

    tlist = tlist + `
        <div class="row mt-3">
          <div class="col-sm-12 col-md-4"><p class="tName"> ${name}</p></div>`;
    if (data.user.tcAcceptorDeclineStatus == 0) {


      tlist = tlist + ` <div class="col-sm-12 col-md-4 d-flex tbtn">
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
          <div class="col-sm-12 col-md-4">
            <button id="generatePDF" type="button"  class="btn btn-success float-right" onclick="saveTermsandConditions(`+ data.id + `)">
              Submit
            </button>
          </div> `;
    }


    tlist = tlist + `   </div> `;






    $('#mainlistBodyPage .tcList').html(tlist);

  }


}


