const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var count = 0;

$(".dropdown dt").click(function(){
    $(this).next(".dropdown_content").toggle("slow");
});

if (isMobile) {
    $("menu .details a").click(function(){
        if ($(this).index() == 0){
            $(this).attr("href", "tel:941818994");
        }
        if ($(this).index() == 3){
            popup('<i class="fa fa-times"></i></a><iconify-icon icon="bx:error"></iconify-icon><aside><h3 class="title small">Timings may vary</h3><p>For accurate timings please connect through a call & confirm.</p></aside>', 'alert');
        }
    });
} else {
    $("menu .details a").click(function(){
        switch($(this).index()){
            case 0:
                return popup('<i class="fa fa-times"></i></a><iconify-icon icon="subway:error" class="error"></iconify-icon><aside><h3 class="title small">Unsupported device</h3><p>It looks like your device won\'t support for <b>calling</b>. Kindly use a Mobile device.</p></aside>', 'alert');
                break;
            case 3:
                 popup('<i class="fa fa-times"></i></a><iconify-icon icon="bx:error"></iconify-icon><aside><h3 class="title small">Timings may vary</h3><p>For accurate timings please connect through a call & confirm.</p></aside>', 'alert');
                break;
            default:
                break;
        }
    });
}

function popup(mssg, type){
    if(type == "alert"){
        if ($(".alert").length < 2){
            count++;
            $(".additional").append('<section class="alert alert_'+count+' flex padding_1x"><a href="javascript:void(0)" onclick="closer(\'modal\',\'alert_'+count+'\')" class="close">'+mssg+'</section>');
            setTimeout(function(){$(".alert_"+count).remove();}, 10000);
            if ($(".alert").length > 0){ setTimeout(function(){$(".alert_"+count).prev().remove();}, 4000); }
        }
    }
}

$(".ham").click(function(){
    if ($("menu").css("left") != "0px"){
        $(this).addClass(" hamburger");
        $("body").append('<div class="overlay" onclick="closer()"></div>');
        $("menu").css("left","0px");
        $("body").css({'overflow-y':'hidden'});
    }
});


$(".close").click(function(){
    $(".overlay").remove();
    if ($("menu").css("left") >= "0px"){
        $(".ham").removeClass(" hamburger");
        $("menu").css("left","-105%");
        $("body").css({'overflow-y':'visible'});
    }
});
function closer(type, el){
        if(type=="modal"){
        $("."+el).remove();
        return 1;
        }
    $(".overlay").remove();
    if ($("menu").css("left") >= "0px"){
        $(".ham").removeClass(" hamburger");
        $("menu").css("left","-105%");
        $("body").css({'overflow-y':'visible'});
    }
}

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--dark)") ;
        document.getElementById("roll_back").style.display = "flex";
    } else {
        $("nav").css("background-color","transparent") ;
        document.getElementById("roll_back").style.display = "none";
    }
}




const callBtn = document.getElementById("call-btn");


callBtn.addEventListener("click", () => {
  window.location.href = "tel:+919418189944";
});


const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.getElementById('chatbot');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

// Open chat
chatbotToggle.addEventListener('click', () => {
  chatbot.style.display = 'flex';
  chatbotToggle.style.display = 'none';
});

// Close chat
closeBtn.addEventListener('click', () => {
  chatbot.style.display = 'none';
  chatbotToggle.style.display = 'flex';
});

// Send message
sendBtn.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const userInput = chatbotInput.value.trim();
  if (userInput === '') return;

  appendMessage(userInput, 'user-msg');
  chatbotInput.value = '';

  setTimeout(() => {
    botReply(userInput);
  }, 1000);
}

function appendMessage(msg, className) {
  const div = document.createElement('div');
  div.className = className;
  div.innerText = msg;
  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function botReply(userInput) {
  let reply = '';

  if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
    reply = 'Hello! 👋 Welcome to Niva\'s Kitchen! 🍽️ How can I assist you today?';
  } else if (userInput.toLowerCase().includes('menu')) {
    reply = 'Our Menu 🍴 includes Indian Thali, Italian Pasta, Fresh Juices, and more! 😋';
  } else if (userInput.toLowerCase().includes('order')) {
    reply = 'You can place an order by calling 📞 us or visiting the Order section on the website.';
  } else {
    reply = 'Sorry, I didn\'t get that 🤔. Please ask about Menu, Order, or any Service.';
  }

  appendMessage(reply, 'bot-msg');
}



