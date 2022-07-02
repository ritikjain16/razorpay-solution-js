Use Razorpay Solution Js For <b>Easy Way</b> to integrate Razorpay Payment Gateway.

Run the commands in your backend :

    npm i razorpay-solution-js

    or

    yarn add razorpay-solution-js

Razorpay Solution has 5 methods :

    1. createinstance
    2. createOrder
    3. verifyOrder
    4. createRefund
    5. getRefundStatus

<h1>createinstance</h1>
    <p>It returns a instance of razorpay, just pass (<b>razorpay_key_id</b>,<b>razorpay_key_secret</b>)</p>

<h1>createOrder</h1>
    <p>It returns a order of razorpay, just pass (<b>instance</b>, <b>amount</b>, <b>currency</b>, <b>OrderId</b>)</p>
    <p><b>instance</b> :- which returns from createinstance method</p>
    <p><b>currency</b> :- pass currency , Ex - for india, pass "INR"</p>
    <p><b>amount</b>:- pass amount in smallest currency unit (<b>integer</b>)</p>
        <p>Ex- For Rs.100 pass amount 10000 </p>
    <p><b>OrderId</b>:- Id Generated by client for a particular order</p>

Then integrate frontend part in your client side.

<h1>Frontend code is : - </h1>

    <button id="rzp-button1">Pay</button>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
        var options = {
            "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);

        rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

    document.getElementById('rzp-button1').onclick = function(e){
        rzp1.open();
        e.preventDefault();
    }

    </script>

<h2>If you are using React, run : - </h2>

    npm i react-razorpay

    or

    yarn add react-razorpay

    <h2>Add code in .js file</h2>

        import useRazorpay from "react-razorpay";

        const App = () =>{
            const Razorpay = useRazorpay();

            const loadRazorpayScript = () => {
                const script = document.createElement("script");
                script.src = `https://checkout.razorpay.com/v1/checkout.js`;
                document.body.appendChild(script);
            };

            useEffect(()=>{
                loadRazorpayScript()
            },[])
        }

    Then add the options and checkout on razorpay hassle free.

For more details https://www.npmjs.com/package/react-razorpay


<h1>verifyOrder</h1>
    <p>If the order is completed then verify the order from this method.</p>
    <p>When the order is complete , razorpay returns some details like <b>razorpay_order_id, razorpay_payment_id, razorpay_signature</b></p>
    <p>just pass (<b>razorpay_key_secret</b>, <b>razorpay_order_id</b>, <b>razorpay_payment_id</b>, <b>razorpay_signature</b>)</p>
    <p>It will return<b>"Payment Verified"</b> if the order is successful</p>
    <p>It will return <b>"Payment Failed"</b> if the order is unsuccessful</p>

<h1>createRefund</h1>
    <p>Initiate the refund by using this method, just pass (<b>instance</b>, <b>razorpay_payment_id</b>, <b>refundID</b>, <b>amountToRefund</b>, <b>speed</b>)</p>
    <p><b>instance</b> :- which returns from createinstance method</p>
    <p><b>razorpay_payment_id</b> :- which returns by razorpay after order completion</p>
    <p><b>refundID</b> :- Id Generated by client for a particular refund</p>
    <p><b>amountToRefund</b> :- refund amount should be in smallest currency unit like in createorder, and it must be less than or equal to the original amount of order.</p>
    <p><b>speed</b> :- it has 2 values , "normal" and "optimum"</p>
        <p>If you pass <b>"normal"</b> - It will be a normal refund</p>
        <p>If you pass <b>"optimum"</b> - It will be a instant refund</p>
    <p>This method returns refund details.</p>

<h1>getRefundStatus</h1>
    <p>It returns the status of any refunded order, just pass (<b>instance</b>, <b>razorpay_payment_id</b>, <b>refundID</b>)</p>
    <p><b>instance</b> :- which returns from createinstance method</p>
    <p><b>razorpay</b>_payment_id :- which returns by razorpay after order completion</p>
    <p><b>refundID</b> :- Given by client for a particular order in createRefund.</p>

For more details refer to :- https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/

<h2>Thanks For using this. Have a great payment.</h2>
<h1>By RavishingRitik16 </h1>
