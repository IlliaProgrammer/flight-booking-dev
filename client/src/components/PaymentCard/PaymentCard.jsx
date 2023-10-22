import React from 'react';
import styles from './PaymentCard.module.css';

const PaymentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card__container}>
        <div className={styles.card}>
          <div className={`${styles.row} ${styles.paypal}`}>
            <div className={styles.left}>
              <input id="pp" type="radio" name="payment" />
              <div className={styles.radio}></div>
              <label htmlFor="pp">Paypal</label>
            </div>
            <div className={styles.right}>
              <img src="data:image/png;base64,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" alt="paypal" />
            </div>
          </div>
          <div className={`${styles.row} ${styles.credit}`}>
            <div className={styles.left}>
              <input id="cd" type="radio" name="payment" />
              <div className={styles.radio}></div>
              <label htmlFor="cd">Debit/ Credit Card</label>
            </div>
            <div className={styles.right}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARoAAACzCAMAAABhCSMaAAAAn1BMVEX///8aH3H3tgAAAGcAAGT3sgD09PbS0t7//vn3tAD85LQXHHAeI3QAAGng4esAAGMTGW8AC2v97NDo6fCLja4OFW4ABWoADGsKEm27vM+bnLmHiKzExNVgYpTw8PUvM3t1d6GsrcVRU4u8vdBsbptoapkAAFzKy9qkpb8/QoIoLHjY2eRGSYaxssgtMXqUlbV+f6Y5PH/++OxYWo9MTojKUlsBAAAKJklEQVR4nO2ceXviOBKH8UpDdtcRmAEDHcIR0glXju5Jvv9nW8JhS7+qEs7EkGf2qfe/bluxXZLqFo2GoijKhWheKQHNQjRXj0bxeLwqRWMSxcOoaCRUNCIqGhEVjYiKRkRFI6KiEVHRiKhoRFQ0IioaERWNiIpGREUjoqIRUdGIqGhEVDQiKhoRFY2IikbEF82jVTy8YkujqQQ0FEVRFEVRFEVRFEVRFEVRFEVRFEVpTLqtblerZwGt59546tqHqms6ny0Xk+9+pw9uBtcxnkat6PBRDgOGo8OVpzS8MHjlxjefH4bWdfKsqNWn2dAZOx3dRp/7PH4J/7y7it7/d5i33TCVyTr2Z2y4y2BA+yhKCxcM862LB7N9OtfMkA2MG99LT11kLoc/75ZfEgNHc3EzN6aTce+3p/9bHv3s4OZ8friywcYVQzbJ/dQMY70eg7X01DYV5zA6g3+fRW9qnSidzlgc+ISDirVxB0JLr2HoZmUi87ETzS/+oa02c3MqyfHrtJYr22HXdpLYhTQIX7IUwAwWxHAWDu21TwgmSdwz/1QyH/uXPKfqbvUyfiLzN2FEr4Nfc3O8tAYxuzt/YHOFO5H7WN4CbCx7t5HmryZunywnnLZwO1lmhUKZEFWz8cZ186iSOQ7hH4rr8UD/hr+9Pq7emcY/w1vGH3hrqQsXeMmXblfWax7CWm0KjYm5rBFr444u2HA3FMxzuM8WS+OmH17JVuWwZlpFMkmfdYQaN9JWdPWKgeWWyIa3FV28LyvN/BikNhiV4+ZVdtP2U3mn71qwFYnt1isGFrKb/TkvoUq4NCkZauEfxaVlxVZd3uTciqOd6CHWSIssG1Yj5vD5ab+4RBZUaW2Igj6OzrKtZ+39m3dU3nATF3R6dcuBY0o8OcaOkvnz3u0HOnyD4tKvAf2qrG9sNl39ng6tcQfPnHdvu5y7d/gjc25A3Yzw9b39UEDmz9vsI9hrpbVp0m9LzXRZ6O/W/evcmkGa8EEReTPvz/S5AXVDTC+zWMn8+dYTHdbS2iyJgckTom8Xv/rOsg6Dk5Rwwi/t2iG+A+NjvPbxzTx3FFVNeY14+dmKTV/9+M39N0ZmAVJgUS/4AWlKbklh/rKX8pocdlOHzX0m9vkd84h8B+F8kCVBnAaihH3dQMLuwtqQQzZDIbxmuQpXI8iJdzHqhigbkohCny6x3kUSdhfWhiR4PrULfgZ/N3tfw9/60jdXBZUFBm/EOwkcZvRYyxVFluNnosJJ+Fbu/i1cN0EIezYwPBo+hNcxRkrannmgYXdhbdCqJ9m0+kvBQ02jF5pyIdSrGfz09CW8jusie/Iuku3oCmtDRJO46sozdL+3swWeJabLzgNRlzawpVQX+T5hJOwmG2o7tKps7sOHbtUfxCOfWYFfAH2rMGXzAHo2zfyrkbCbqOEt7r1azPweaJad8wthnL1IhQ8/L9jHE/SEw9wKujxemEE8ng9yw6dmQiDo3ckbgpVzJ0H3oEMf7GOSTgoqKZGwm8mZ7oWXn7bhEJfu0mawP89QjGLA5HTgT2FOPLRfGHYH/gYXeCcfIeb6RLqlGW7xvV65BT38EP8bNYHJKM+lI0o4DAUxOg4CMLaItPtWs4puB/Cw9/4QeDpe7uOcoKb14tqfcCkLLfu7GHbvBotphcy+RfQx5JAOkQuUhc9ajCrAOKj06EmICK4WUURBkNGM5BVyKxryBdjp9/1/wwQK+eSaaYEASguMGjoNYxdihGAqaVbe/7ZrwdkHi3mcqGWoh4UqRN2Asinzi5ge7YRTLYfdB25issksG1Shu2AOHgyoPbHOWi8QPhdr4ypmm+k4Jsnbi8kmMZyZeQ0DjMIUQT41HdYrAwF0XM1BR+Kn40y9iGF3wZLpAvEGMPlvcIdK9QVL2FyiGEU8t4OKa5LkZqj6SF6cqwrfOrFmsqVParTgKnnaDSaKy++fAYiuD5mVU40zkbDbY/JuYglwzNJDQtZLDsHrXCYJio5rvt/fmJ7FXFSs2u1zZ+S6SdIOVxq65mVtHe1hkBw5H7iK19xbJm1YFLFqd0Bz1haL3+BEwq4JrqL7VaMAZMAL38eQM5hrYn8wfowkf1tjKwnH+BEV+pjBQl2Bl3yRJCjunQ99SnxZfJUuSXLFCmebseX18dHb3YE+ZlDegG1/mWIUxokfVhgtOtEk96ilT5RbN++W1cd+miMB5zPQJ/BGUm9kzWDIPyPLl05SNOzmn3JNk6JBSwiWvMKQDQKaLNLKWyOwx7crBNtLaBZArnbLzBjv2KuyY98BaFoMvr/82ZWANWJIIoq2CeAKqBQLMz1ypXpH1zN9ee15vEJeTeg7rBvouzKbk/VeEna3K2VQaINe0bZO6zNpJ+B0XHIOwLPNMElFFQnxlWkfAQup85eBfj8Wb1HO1ZEPoENBmrVIyvJ02M2zxPVYdOtw5ZkYaVKjACLwPe/FW+C5Azr7VZc3SbUXRjjaN8JxmSQoV2yMfjcNyysqRdJTdLRsJDt0kssUo0785qwhMTUt+FZ8EGkMPPo1mKI/zfk78vfERMM4ntGwe3wj1l2JSI85KaYr8hSX6Mj/QG7TZU+ekLDbl17mnHBccUOs0DG4Js0qp6lqFL9K5NWCCPAAfqIfR2xdt7Rjn5Y0RflKw6ijqsHyeRUukwSVDh/t3oDmGqPV7r0Rylx7/et5U2ytye3MMOJv7z/vPqrrBC5TjJLK91vSnN5Mwm4/wV94tenAGetenubz+WpoHadnjxUDcnamCp3LFKNoO+MRLm7EAx25XxsAV/rjTEKGhfUjh/Y3eliiCvlFOvK57vDj2zOeFXqIwfx9Ym8cm9hIW8WQ/a1yOBZ5oWKUOHFsvwbpHvF2Pdt0xFM0nuHfG84mXYYJeMzCoc3aEWwEd4QgerY72kMfkLquMIQ/t/BdSVDBHWU7CqNht3CalJFMIYA1HgeQznJ/TzFKiHzZFt1o2C0eDASyIuxakL5uyfR8TzGK+iq7+WPLPdhC4YefVT3+zrpQFGNcZ7IOwfJ8nQKIwCmbDrdkSUuSH3bTKIkj9X7cg556lY9nPH1HRz6vJNj5i57trhIMpe7aM2kkIRLJ/UCS9DId+UyWSXKqSNjt1z1m7f6JnFRukuCL8NRrrGH6Wzrymf5p5gjQjmjY3Wi9vljhx2o+og5n3sLuWPLTA7FkA3hfZ/xZkpDMmhDL19wN3PeI7kX37ufaGjfI/fWT5h1nO+M7dK6nbXjqY6yx+DF4tn280G9udVsIH/WT29jGmqu70f6XsXbfYM36bfTMaa4N+XOxd6zy6H8Kk1Zr+/H6i2qKoiiKoiiKoiiKoiiKoiiKoijK/yf/VgJKyfz5x38Ujz/+9ETzL8VDRSOiohFR0YioaERUNCIqGhEVjYiKRkRFI6KiEVHRiKhoRFQ0IioaERWNiIpGREUjoqIRUdGIqGhEVDQigWiUgFI0f/1XCfiroSiKciH+B1d6NWaubZhSAAAAAElFTkSuQmCC" alt="visa" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TceWA-uG0XH4Ky1M-r7gNA7i1w5H770nyQ&usqp=CAU" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozLTv0y2ach1SxrtRZpIq8Q5z3p-ZQQCUaQ&usqp=CAU" alt="amex" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOxbvUUXRzrxeOY4juMRYOGrMdqFxJRo61XPfK5Tn_YwgTer5tZJXtF7wJC_dx1GcMcg&usqp=CAU" alt="maestro" />
            </div>
          </div>
          <div className={`${styles.row} ${styles.cardholder}`}>
            <div className={styles.info}>
              <label htmlFor="cardholdername">Name</label>
              <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text" />
            </div>
          </div>
          <div className={`${styles.row} ${styles.number}`}>
            <div className={styles.info}>
              <label htmlFor="cardnumber">Card number</label>
              <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxLength="19" placeholder="8888-8888-8888-8888"/>
            </div>
          </div>
          <div className={`${styles.row} ${styles.details}`}>
            <div className={styles.left}>
              <label htmlFor="expiry-date">Expiry</label>
              <select id="expiry-date">
                <option>MM</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <span>/</span>
              <select id="expiry-date">
                <option>YYYY</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className={styles.right}>
              <label htmlFor="cvv">CVC/CVV</label>
              <input type="text" maxLength="4" placeholder="123"/>
              <span data-balloon-length="medium" data-balloon="The 3 or 4-digit number on the back of your card." data-balloon-pos="up">i</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;