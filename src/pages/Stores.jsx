import React from 'react'
import "./Stores.css";
import myImage from "../assets/myImage.png";

const Stores = () => {
  return (
    <div className='store-section'>
       <div className="bangalore-section">
      <h1>BANGALORE</h1>
      <div className="store-container">
        
        {/* Store 1 */}
        <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0351730370176!2d77.51503459999999!3d12.9778304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d395f682c05%3A0x600a1351f767988a!2sHOT%20TOUCH%20HOME%20APPLIANCES!5e1!3m2!1sen!2sin!4v1759513607091!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>HOT TOUCH HOME APPLIANCES</h2>
            <p>
              BHYRAVA ARCADE, 52/A & 53/A, Outer Ring Rd, Malagala, 2nd Stage,
              Naagarabhaavi, Bengaluru, Karnataka 560072
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/HOT+TOUCH+HOME+APPLIANCES/@12.977972,77.5125196,736m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae3d395f682c05:0x600a1351f767988a!8m2!3d12.9779668!4d77.5150945!16s%2Fg%2F11lp1f_z4y?entry=tts&g_ep=EgoyMDI1MDcwOS4wIPu8ASoASAFQAw%3D%3D&skid=3011959c-992a-4f1c-ab95-3e2460171227"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

        {/* Store 2 */}
        <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.2306700396907!2d77.55949849999999!3d13.031257900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d915555555%3A0xfaa298bc68567b90!2sClassic%20Electronics!5e1!3m2!1sen!2sin!4v1759514112128!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Classic Electronics</h2>
            <p>
              6, Aishwarya complex, MS Ramaiah Rd, Gokula 1st Stage, HMT Layout,
              Mathikere, Bengaluru, Karnataka 560054
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Classic+Electronics/@13.0312579,77.5594985,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae17d915555555:0xfaa298bc68567b90!8m2!3d13.0312579!4d77.5594985!16s%2Fg%2F1tfm9p91!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+919999999999" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>
          {/* Store 3 */}

          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.29769691279!2d77.5669035!3d12.9603492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1533737880ff%3A0x52833f173c4ba15e!2sInfinia%20Home%20And%20Kitchen!5e1!3m2!1sen!2sin!4v1759579793676!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Infinia Home & Kitchen</h2>
            <p>
              Address: 68, Tippu Sultan Palace Rd, Chamrajpet, Bengaluru, Karnataka 560018
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Infinia+Home+And+Kitchen/@12.9603492,77.5669035,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1533737880ff:0x52833f173c4ba15e!8m2!3d12.9603492!4d77.5669035!16s%2Fg%2F11q4mbdy1b!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>
           {/* Store 4 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1868.503292903983!2d77.6786213!3d12.9130288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13fef8cb3051%3A0x64f36f3c6d35aa10!2sBOSCH%20HAFELE%20GLEN%20SHOWROOM%20SARJAPUR%20ROAD!5e1!3m2!1sen!2sin!4v1759580012598!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Uniq Retail</h2>
            <p>
              Address: 65/1A, Sarjapur Main Rd, above VODAFONE, Kaikondrahalli, Bengaluru, Karnataka 560035
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/BOSCH+HAFELE+GLEN+SHOWROOM+SARJAPUR+ROAD/@12.9130288,77.6786213,429m/data=!3m1!1e3!4m6!3m5!1s0x3bae13fef8cb3051:0x64f36f3c6d35aa10!8m2!3d12.9125014!4d77.6810832!16s%2Fg%2F11kr99_0cj!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 5 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3735.2703436560546!2d77.6320553!3d13.0286282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b5c268df5d%3A0x43971b6fc100e103!2sMahaveer&#39;s%20Kitchen%20%7C%20Hindware%20%7C%20Hafele%20%7C%20Faber%20%7C%20Bosch%20%7C%20Carysil%2F%20Futura%20%2FELECTROLUX!5e1!3m2!1sen!2sin!4v1759580195114!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Mahaveer's Kitchen </h2>
            <p>
            Address: #35/2,Opp Kothari Granite,Near Marble Center,Mico Traffic Signal, Bannerghatta Rd, Pukhraj Layout, Adugodi, Bengaluru, Karnataka 560030
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Mahaveer's+Kitchen+%7C+Hindware+%7C+Hafele+%7C+Faber+%7C+Bosch+%7C+Carysil%2F+Futura+%2FELECTROLUX/@13.0286282,77.6320553,858m/data=!3m1!1e3!4m6!3m5!1s0x3bae15b5c268df5d:0x43971b6fc100e103!8m2!3d12.9430726!4d77.6029679!16s%2Fg%2F12lr6ttky!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 6 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.109209960248!2d77.57855!3d12.972902699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160942e4db9f%3A0xbb9102136c9a8d58!2sPagariya%20Enterprises!5e1!3m2!1sen!2sin!4v1759580380482!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Pagariya Enterprises</h2>
            <p>
             Address:  37, Hospital Rd, near K G, Anchepet, Chickpet, Bengaluru, Karnataka 560053
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Pagariya+Enterprises/@12.9729027,77.57855,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae160942e4db9f:0xbb9102136c9a8d58!8m2!3d12.9729027!4d77.57855!16s%2Fg%2F1td03h8c!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 7 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.104493047354!2d77.5774212!3d12.9732167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17052f0d144f%3A0xf024cec21593d28a!2sShiva%20Electricals!5e1!3m2!1sen!2sin!4v1759580468630!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Shiva Electricals</h2>
            <p>
             Address:  473, BVK Iyengar Rd, near Maharaja Complex, Balepete, Chickpet, Bengaluru, Karnataka 560053
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Shiva+Electricals/@12.9732167,77.5774212,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae17052f0d144f:0xf024cec21593d28a!8m2!3d12.9732167!4d77.5774212!16s%2Fg%2F11q97brs25!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 8 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3735.2704613209708!2d77.6295622!3d13.0286204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1922347e7bf3%3A0x19c10553c48d9d85!2sBG%20Chimney%20Mart%20(a%20unit%20of%20Sampurna%20Enterprises)!5e1!3m2!1sen!2sin!4v1759580628553!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>BG Mart Sampoorna Enterprises</h2>
            <p>
              Address:  2JHJ+CVX, Srinagar - Kanyakumari Hwy, HBR Layout 4th Block, Kalyan Nagar, Bengaluru, Karnataka 560043
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/BG+Chimney+Mart+(a+unit+of+Sampurna+Enterprises)/@13.0286204,77.6295622,858m/data=!3m1!1e3!4m6!3m5!1s0x3bae1922347e7bf3:0x19c10553c48d9d85!8m2!3d13.0289713!4d77.6309038!16s%2Fg%2F11pcs8p1dc!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 9 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.3587508265687!2d77.7136357!3d13.022766400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17161d66e6e5%3A0xa08ad76f66087ea5!2sMake%20Ur%20Design%20Chimney%20Showroom!5e1!3m2!1sen!2sin!4v1759581402411!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Make U R Design</h2>
            <p>
              Address: Shop No.2, service Road, opposite to New HP petrol bunk, Bhattarahalli, Medahalli, Hosakote, Bengaluru, Karnataka 560049
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Make+Ur+Design+Chimney+Showroom/@13.0227664,77.7136357,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae17161d66e6e5:0xa08ad76f66087ea5!8m2!3d13.0227664!4d77.7136357!16s%2Fg%2F11g873sh23!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 10 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.153190522034!2d77.5756875!3d12.969974599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d0381a3c31%3A0x214bde888da73939!2sParamjyothi%20electricals!5e1!3m2!1sen!2sin!4v1759581509030!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Paramjyoti Electrical</h2>
            <p>
              Address: SHOP NO 5, BVK Iyengar Rd, Basettypet, Huriopet, Chickpet, Bengaluru, Karnataka 560053
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Paramjyothi+electricals/@12.9699746,77.5756875,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae17d0381a3c31:0x214bde888da73939!8m2!3d12.9699746!4d77.5756875!16s%2Fg%2F1tx13tmw!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 11 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119578.41949631949!2d77.4925749!3d12.9251257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1461b9160a3b%3A0xeebe797428d66d3b!2sGrandeur%20modular%20kitchen!5e1!3m2!1sen!2sin!4v1759581633509!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Grandeur</h2>
            <p>
              Address: 27, 1st Main Rd, Jakkasandra, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Grandeur+modular+kitchen/@12.9251257,77.4925749,27460m/data=!3m1!1e3!4m6!3m5!1s0x3bae1461b9160a3b:0xeebe797428d66d3b!8m2!3d12.9251257!4d77.6367705!16s%2Fg%2F11b7803j92!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 12 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.674543151936!2d77.6134976!3d12.935214799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144de1f6c26b%3A0x4c3ec295baf9738!2sFenny&#39;s%20Lounge%20%26%20Kitchen!5e1!3m2!1sen!2sin!4v1759581754649!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>One Nxt Interior</h2>
            <p>
             Address: 2nd Floor, No.115, 80 Feet Rd, below Fenny's Kitchen, 7th Block, Koramangala, Bengaluru, Karnataka 560095
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Fenny's+Lounge+%26+Kitchen/@12.9352148,77.6134976,858m/data=!3m3!1e3!4b1!5s0x3bae144e544da825:0x497a010bafff309b!4m6!3m5!1s0x3bae144de1f6c26b:0x4c3ec295baf9738!8m2!3d12.9352148!4d77.6134976!16s%2Fg%2F11_q5nd1c!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 13 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.093807888389!2d77.6606509!3d12.840120499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d4db2a3a661%3A0xf87a80a2369b62b9!2sBaron%20Electronics%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1759581878272!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Baron Electronics</h2>
            <p>
              Address: 95/A, 2nd Cross Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Baron+Electronics+Pvt.+Ltd./@12.8401205,77.6606509,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae6d4db2a3a661:0xf87a80a2369b62b9!8m2!3d12.8401205!4d77.6606509!16s%2Fg%2F11h3g7ng8y!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 14 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.7026286740684!2d77.7157503!3d12.7991151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d1ca835da11%3A0xc62eed5e75f4e10a!2sJB%20WORLD%20DECOR%20-%20Asian%20Paints%20Beautiful%20homes(Kitchen%7CTiles%7CBath%7CLights%7CFurniture%7CPaint%7CuPVC%7CFabrics)!5e1!3m2!1sen!2sin!4v1759582057182!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>JB world Décor</h2>
            <p>
              Address: 1325/943/3, Hosur Rd, Terracon Doctors Enclave, Chandapura, Bengaluru, Bommasandra, Karnataka 560099
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/JB+WORLD+DECOR+-+Asian+Paints+Beautiful+homes(Kitchen%7CTiles%7CBath%7CLights%7CFurniture%7CPaint%7CuPVC%7CFabrics)/@12.7991151,77.7157503,859m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae6d1ca835da11:0xc62eed5e75f4e10a!8m2!3d12.7991151!4d77.7157503!16s%2Fg%2F11v19n7rk6!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 15 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.924098911541!2d77.4776791!3d12.918543800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fff34321679%3A0x8190ddd3f0aa6514!2sS%20S%20SYSTEMS!5e1!3m2!1sen!2sin!4v1759582234006!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>SS System</h2>
            <p>
              Address: A-9, Bandemata Arch, S.B.S Complex, Sy. No. 207/1, Kommaghatta Main Rd, BSM Extension, Kengeri Satellite Town, Bengaluru, Karnataka 560060
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/S+S+SYSTEMS/@12.9185438,77.4776791,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae3fff34321679:0x8190ddd3f0aa6514!8m2!3d12.9185438!4d77.4776791!16s%2Fg%2F11l6m3v8dh!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 16 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59769.661799323425!2d77.4991071!3d13.0065008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae162dce4ce63d%3A0x75b05c7e4f2ca72d!2sBOSCH%20Brand%20Store%20-%20Aditya%20Retail!5e1!3m2!1sen!2sin!4v1759582307917!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Aditya kitchen Innocation</h2>
            <p>
              Address: 251, 17th Cross Road, Sampige Road, 2, 2nd Main Rd, Malleshwaram, Bengaluru, Karnataka 560003
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/BOSCH+Brand+Store+-+Aditya+Retail/@13.0065008,77.4991071,13725m/data=!3m1!1e3!4m6!3m5!1s0x3bae162dce4ce63d:0x75b05c7e4f2ca72d!8m2!3d13.0065008!4d77.5712049!16s%2Fg%2F11clzkfrtw!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 17 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.4295452237384!2d77.56038509999999!3d13.084247999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae235ed8f132af%3A0xb9553a4f4b1e7d6!2sSri%20Venkateshwara%20stylish%20kitchen!5e1!3m2!1sen!2sin!4v1759582421708!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Sri Venkateshwar Stylish Kitchen</h2>
            <p>
              Address: 1116, 6th Block, HMT Layout, Vidyaranyapura, Bengaluru, Karnataka 560097
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Sri+Venkateshwara+stylish+kitchen/@13.084248,77.5603851,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae235ed8f132af:0xb9553a4f4b1e7d6!8m2!3d13.084248!4d77.5603851!16s%2Fg%2F11x8hd6n8x!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 18 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5234182868976!2d77.5163503!3d12.878421000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1b061bc829%3A0x70ecea641d5a176f!2sVachana%20marketing!5e1!3m2!1sen!2sin!4v1759582528634!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Vachana Marketing</h2>
            <p>
           Address: 107/A, 80ft. Road, 3rd Block, Banashankari Stage 6, Chikkegowdanapalya, Bengaluru, Karnataka 560062
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Vachana+marketing/@12.878421,77.5163503,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae3f1b061bc829:0x70ecea641d5a176f!8m2!3d12.878421!4d77.5163503!16s%2Fg%2F11vp_qlm8y!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 19 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.1895790564763!2d75.1126402!3d15.350369400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d755974869bb%3A0xe07784d8be70f24!2sChimney%20HUB%20-%20Hubballi!5e1!3m2!1sen!2sin!4v1759582613713!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Chimney Hub</h2>
            <p>
            Address: 24, pride icon building behind Prestige Xclusive showroom, Below Reliance digital 2nd gate, Gokul Rd, beside Cubix hotel, Hubballi, Karnataka 580030
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Chimney+HUB+-+Hubballi/@15.3503694,75.1126402,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bb8d755974869bb:0xe07784d8be70f24!8m2!3d15.3503694!4d75.1126402!16s%2Fg%2F11m5cw_nh9!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 20 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.0225478593575!2d77.7605489!3d13.045044399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ffdb6459341%3A0x665017e5e28369e8!2sSHIV%20SHAKTI%20HARDWARE%20(ebco%20dealership)!5e1!3m2!1sen!2sin!4v1759582707698!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>SHIV SHAKTI HARDWARE (ebco dealership)</h2>
            <p>
              Shop No. G2, Ground Floor, No. 11/14, Kadugodi Main Road, near Kapoors Chaat Bhandar, Hobli, Konadasapura, Bidarahalli, Bengaluru, Karnataka 560049
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/SHIV+SHAKTI+HARDWARE+(ebco+dealership)/@13.0450444,77.7605489,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae0ffdb6459341:0x665017e5e28369e8!8m2!3d13.0450444!4d77.7605489!16s%2Fg%2F11wf_sh45v!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 21 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7491.488338442329!2d76.6462764!3d12.3151003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11043a43452d2c9d%3A0x70cd32cbb222d7c4!2sShree%20Mahaveer%20Distributors!5e1!3m2!1sen!2sin!4v1759582873914!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>MD Distributors</h2>
            <p>
             Address:  Old #246, New #123, Cross, KR Hospital Rd, near Kaveri Emporium, Devaraja Mohalla, Mandi Mohalla, Mysuru, Karnataka 570001
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Shree+Mahaveer+Distributors/@12.3151003,76.6462764,1720m/data=!3m1!1e3!4m6!3m5!1s0x11043a43452d2c9d:0x70cd32cbb222d7c4!8m2!3d12.3128683!4d76.6524368!16s%2Fg%2F11b6xfpml8!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>

         {/* Store 22 */}
          <div className="store-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119533.31370482239!2d77.512353!3d13.0189656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1717f871faed%3A0x59860607a3a2d2b7!2sPrestige%20Xclusive%20-%20Banasawadi%2C%20Bengaluru!5e1!3m2!1sen!2sin!4v1759583107020!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="store-info">
            <h2>Neuvo Home</h2>
            <p>
              Address: 1 & 2 SMR Vinaya Estate Ground Floor Next to Bhagat Hero Motors or Café coffee day Service Road, Outer Ring Rd, Banaswadi, Bengaluru, Karnataka 560043
            </p>
            <div className="btn-group">
              <a
                href="https://www.google.com/maps/place/Prestige+Xclusive+-+Banasawadi,+Bengaluru/@13.0189656,77.512353,27450m/data=!3m1!1e3!4m6!3m5!1s0x3bae1717f871faed:0x59860607a3a2d2b7!8m2!3d13.0189696!4d77.6565484!16s%2Fg%2F1td6dxxh!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                Go To Google Maps &gt;
              </a>
              <a href="tel:+918888888888" className="call-btn">
                Call The Store &gt;
              </a>
            </div>
          </div>
        </div>
       <div className="hydrabad-banner">
        <img src={myImage} alt="Hyderabad Banner" />
      </div>
         
      </div>

      
    </div>
    
    
    </div>
  )
}

export default Stores