import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

export default class timeline extends Component {
  render() {
    return (
      <div>
        <VerticalTimeline lineColor="#9C7506">
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#0b0c10", color: "#fff" }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: "7px solid  #1f2833" }}
          >
            <h3 className="vertical-timeline-element-title">Mt. Gox</h3>
            <h4 className="date">November 2014</h4>
            <list className="list">
              <li className="listitem">
                By 2013, just 3 years after launching, Mt. Gox was processing
                70% of all Bitcoin trades.
              </li>
              <li className="listitem">
                On Feb 7th, 2014, Mt. Gox suspended Bitcoin withdrawals due to
                “technical problems”.
              </li>
              <li className="listitem">
                On Feb 24th, 2014, Mt. Gox suspended all trading and the
                exchange’s website went offline. That same week, a document was
                leaked revealing that 744,408 BTC was stolen from customers due
                to poor security measures and another 100,000 BTC was also
                missing.
              </li>
              <li className="listitem">
                On February 24th, 2014, Mt. Gox filed for bankruptcy.
              </li>
              <li className="listitem">
                On March 15th, 2019, Mt. Gox CEO, Mark Karpeles was found guilty
                of falsifying data to inflate holdings of the exchange.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#0b0c10", color: "#fff" }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: "7px solid  #1f2833" }}
          >
            <h3 className="vertical-timeline-element-title">Celcius</h3>
            <h4 className="date">June 2022</h4>
            <list className="list">
              <li className="listitem">
                By May of 2022, Celcius had close to $12 billion in assets under
                management.{" "}
              </li>
              <li className="listitem">
                Celsius had been using the crypto custodian Prime Trust to store
                some customer assets since March 2020. This relationship ended
                in June 2021, when Prime Trust's risk team expressed concern
                about Celsius's strategy of "endlessly re-hypothecating assets
                ... lending the same assets over and over and over again to
                juice yields".{" "}
              </li>
              <li className="listitem">
                On June 11th, 2022, Celcius CEO Alex Mashinsky replied to a user
                on Twitter stating that the user’s claims of frozen withdrawals
                were “FUD and misinformation.”
              </li>
              <li className="listitem">
                Two days later, Celcius announced that it had suspended all
                withdrawals, swaps, and account transfers due to “extreme market
                conditions”.
              </li>
              <li className="listitem">
                On July 14th, 2022, Celcius filed for bankruptcy. In the
                filling, it was discovered that the company had $5.5 billion in
                liabilities and only $4.31 billion in assets.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#0b0c10", color: "#fff" }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: "7px solid  #1f2833" }}
          >
            <h3 className="vertical-timeline-element-title">Voyager Digital</h3>
            <h4 className="date">June 2022</h4>
            <list className="list">
              <li className="listitem">
                On June 17th, 2022, hedge fund Three Arrows Capital announced it
                had suffered heavy losses due to the collapse of the Terra
                ecosystem.
              </li>
              <li className="listitem">
                On June 22nd, 2022, Voyager disclosed that it had exposure to
                Three Arrows Capital to the tune of $370 million worth of BTC
                and $350 million worth of USDC.{" "}
              </li>
              <li className="listitem">
                On July 1st, 2022, Voyager froze all deposits, withdrawals, and
                loyalty rewards due to “market conditions”.
              </li>
              <li className="listitem">
                On July 7th, 2022, Voyager Digital filed for bankruptcy. In the
                filing, Voyager estimated that it had more than 100,000
                creditors and somewhere between $1 billion and $10 billion in
                assets, and liabilities worth the same value.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#0b0c10", color: "#fff" }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: "7px solid  #1f2833" }}
          >
            <h3 className="vertical-timeline-element-title">FTX</h3>
            <h4 className="date">November 2022</h4>
            <list className="list">
              <li className="listitem"> 1) What </li>
              <li className="listitem"> 2) H </li>
              <li className="listitem"> 3) A </li>
              <li className="listitem"> 4) P </li>
              <li className="listitem"> 5) P </li>
              <li className="listitem"> 6) E </li>
              <li className="listitem"> 7) N </li>
              <li className="listitem"> 8) E </li>
              <li className="listitem"> 9) D </li>
              <li className="listitem">
                {" "}
                10) [NOT LEGAL ADVICE. NOT FINANCIAL ADVICE. THIS IS ALL AS I
                REMEMBER IT, BUT MY MEMORY MIGHT BE FAULTY IN PARTS.]{" "}
              </li>
            </list>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}
