import React, { Component } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

export default class timeline extends Component {
  render() {
    return (
      <div>
        <VerticalTimeline lineColor="#9C7506">
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: '#0b0c10', color: '#fff' }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: '7px solid  #1f2833' }}
          >
            <h3 className="vertical-timeline-element-title">Mt. Gox</h3>
            <h4 className="date">2014</h4>
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
            iconStyle={{ background: '#0b0c10', color: '#fff' }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: '7px solid  #1f2833' }}
          >
            <h3 className="vertical-timeline-element-title">QuadrigaCX</h3>
            <h4 className="date">January 2019</h4>
            <list className="list">
              <li className="listitem">
                In December of 2018, the CEO of QuadrigaCX, Gerald Cotton,
                passes away while visiting India.
              </li>
              <li className="listitem">
                On january 14th, 2019, Cotten's wife posted an announcement on
                the QuadrigaCX website announcing his passing. This same week,
                customers are unable to withdraw their crypto assets from the
                exchange.
              </li>
              <li className="listitem">
                On January 31st, 2019, a notice appears on the website
                announcing that the exchange is bankrupt and that they are not
                able to locate the private keys for their wallets.
              </li>
              <li className="listitem">
                In 2020, the Ontario Securities Commission reported that Cotten
                had operated the exchange as a Ponzi Scheme and misappropriated
                funds to fund his lavish lifestyle. Cotten reportedly personally
                traded with customer assets, losing approximately $115 million.
                According to the investigation, Cotten was the sole holder of
                the private keys associated with the exchange, ensuring that the
                remaining customer deposits were not recoverable.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: '#0b0c10', color: '#fff' }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: '7px solid  #1f2833' }}
          >
            <h3 className="vertical-timeline-element-title">Celcius</h3>
            <h4 className="date">July 2022</h4>
            <list className="list">
              <li className="listitem">
                By May of 2022, Celcius had close to $12 billion in assets under
                management.
              </li>
              <li className="listitem">
                Celsius had been using a 3rd party, Prime Trust, to store some
                customer assets since March 2020. This relationship ended in
                June 2021, when Prime Trust's risk team expressed concern about
                Celsius's strategy of "endlessly re-hypothecating assets ...
                lending the same assets over and over and over again to juice
                yields".
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
                On July 14th, 2022, Celcius filed for bankruptcy. In the filing,
                it was discovered that the company had $5.5 billion in
                liabilities and only $4.31 billion in assets.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: '#0b0c10', color: '#fff' }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: '7px solid  #1f2833' }}
          >
            <h3 className="vertical-timeline-element-title">Voyager Digital</h3>
            <h4 className="date">July 2022</h4>
            <list className="list">
              <li className="listitem">
                On June 17th, 2022, hedge fund Three Arrows Capital announced it
                had suffered heavy losses due to the collapse of the Terra
                ecosystem.
              </li>
              <li className="listitem">
                On June 22nd, 2022, Voyager disclosed that it had exposure to
                Three Arrows Capital to the tune of $370 million worth of BTC
                and $350 million worth of USDC.
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
            iconStyle={{ background: '#0b0c10', color: '#fff' }}
            textClassName="timeline-text-element"
            contentArrowStyle={{ borderRight: '7px solid  #1f2833' }}
          >
            <h3 className="vertical-timeline-element-title">FTX</h3>
            <h4 className="date">November 2022</h4>
            <list className="list">
              <li className="listitem">
                On November 2nd, 2022, CoinDesk published a report claiming that
                the reserves for Alameda Research, a crpyto trading firm owned
                by Sam Bankman-Fried, were based on FTT, a token created by FTX.
              </li>
              <li className="listitem">
                On November 6th, 2022, the CEO of Binance tweeted that he
                intended to sell Binance's FTT allocation on the open market due
                to the "recent revelations". The CEO of Alameda Research,
                Caroline Ellison, responded on twitter, offering to purchase the
                tokens from Binance at a $22 price point.
              </li>
              <li className="listitem">
                On November 7th, Sam Bankman-Fried tweeted, "FTX is fine. Assets
                are fine."
              </li>
              <li className="listitem">
                In the 72 hours leading up to November 8th, FTX experienced $6
                billion worth of withdrawals. On the morning of November 8th,
                FTX froze withdrawals from the platform. Later that day, Binance
                signed a nonbinding agreement to purchase FTX to help cover the
                liquidity crunch.
              </li>
              <li className="listitem">
                The very next day, on November 9th, Binance backed out of the
                deal after reviewing the company's structure and books. That
                same day, SBF told investors that FTX needed emergency funding
                to cover an $8 billion hole on the balance sheet.
              </li>
              <li className="listitem">
                On November 11th, 2022, FTX filed for bankruptcy.
              </li>
              <li className="listitem">
                Sam Bankman-Fried was arrested in the Bahamas on December 12th,
                2022 for a long list of fraud-related charges.
              </li>
              <li className="listitem">
                On November 2nd, 2023, SBF was found guilty on 7 criminal fraud
                counts, facing a maximum of 115 years in prison.
              </li>
            </list>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}
