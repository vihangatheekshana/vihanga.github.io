document.addEventListener('DOMContentLoaded', function() {
    const apologyMessage = document.querySelector('main p');
    const forgiveButton = document.getElementById('forgiveButton');
    const sendFlowersButton = document.getElementById('sendFlowersButton');

    // Function to apologize and show a message
    function apologize() {
        apologyMessage.textContent = "I'm truly sorry, please forgive me.Ane Haaaa patiyo .mata samawenna mn hithala ehema kiwwe naa..mn eka kiwwe joke ekata..mn dannwa oyata duka hithuna kiyla.ekata sorry chuuutiyooo.";
    }

    // Function to send flowers
    function sendFlowers() {
        apologyMessage.textContent = "Menna oyata magen podi thaggak.oya harima hoda kellek.mata samawenna.oya lassana malak!";
    }

    // Event listeners for buttons
    forgiveButton.addEventListener('click', apologize);
    sendFlowersButton.addEventListener('click', sendFlowers);
});
