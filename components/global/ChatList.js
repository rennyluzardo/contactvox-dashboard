import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Chats() {
  return (
    <div id="contacts">
      <ul>
        <li className="contact" data-id="1">
          <div className="wrap">
            <span className="contact-status online"></span>
            <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
            <div className="meta">
              <p className="name">Luis Aguirre</p>
              <p className="preview">You just got LITT up, Mike.</p>
            </div>
          </div>
        </li>
        <li className="contact active" data-id="2">
          <div className="wrap">
            <span className="contact-status busy"></span>
            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <div className="meta">
              <p className="name">Luis Machado</p>
              <p className="preview">
                Wrong. You take the gun, or you pull out a bigger one. Or, you
                call their bluff. Or, you do any one of a hundred and forty six
                other things.
              </p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="3">
          <div className="wrap">
            <span className="contact-status away"></span>
            <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
            <div className="meta">
              <p className="name">Rachel Zane</p>
              <p className="preview">
                I was thinking that we could have chicken tonight, sounds good?
              </p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="4">
          <div className="wrap">
            <span className="contact-status online"></span>
            <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
            <div className="meta">
              <p className="name">Donna Paulsen</p>
              <p className="preview">Mike, I know everything! I'm Donna..</p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="5">
          <div className="wrap">
            <span className="contact-status busy"></span>
            <img
              src="http://emilcarlsson.se/assets/jessicapearson.png"
              alt=""
            />
            <div className="meta">
              <p className="name">Jessica Pearson</p>
              <p className="preview">
                Have you finished the draft on the Hinsenburg deal?
              </p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="6">
          <div className="wrap">
            <span className="contact-status"></span>
            <img
              src="http://emilcarlsson.se/assets/haroldgunderson.png"
              alt=""
            />
            <div className="meta">
              <p className="name">Harold Gunderson</p>
              <p className="preview">Thanks Mike! :)</p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="7">
          <div className="wrap">
            <span className="contact-status"></span>
            <img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
            <div className="meta">
              <p className="name">Daniel Hardman</p>
              <p className="preview">
                We'll meet again, Mike. Tell Jessica I said 'Hi'.
              </p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="8">
          <div className="wrap">
            <span className="contact-status busy"></span>
            <img
              src="http://emilcarlsson.se/assets/katrinabennett.png"
              alt=""
            />
            <div className="meta">
              <p className="name">Katrina Bennett</p>
              <p className="preview">
                I've sent you the files for the Garrett trial.
              </p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="9">
          <div className="wrap">
            <span className="contact-status"></span>
            <img
              src="http://emilcarlsson.se/assets/charlesforstman.png"
              alt=""
            />
            <div className="meta">
              <p className="name">Charles Forstman</p>
              <p className="preview">Mike, this isn't over.</p>
            </div>
          </div>
        </li>
        <li className="contact" data-id="10">
          <div className="wrap">
            <span className="contact-status"></span>
            <img
              src="http://emilcarlsson.se/assets/jonathansidwell.png"
              alt=""
            />
            <div className="meta">
              <p className="name">Jonathan Sidwell</p>
              <p className="preview">
                <span>You:</span> That's bullshit. This deal is solid.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Chats;
