import { useState } from 'react';
import screen from './screen.png';
import arrow from './arrow.svg';
import './App.css';
import Header from './Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Menudata } from './Menudata';
import { MenuWrapper, MenuBox, MenuName, MenuItemWrapper, MenuItemName, MenuItemDetail, CafeRant, Footer, FooterLeft, FooterRight, FooterBottom, FooterCredit } from './styled';

function App() {
  const [active, setActive] = useState(-1);

  return (
    <div className="App">
        {/* <Header/> */}
        <div className="First-fold">
          <img src={screen} className="App-logo" alt="logo"></img>
          <MenuWrapper>
            {
              Menudata.map(menuDetails => (
                (active === -1 || active === menuDetails.index) &&
                <MenuBox
                  key={menuDetails.index}
                  displayWidth={active === menuDetails.index ? '100%' : menuDetails.displayWidth}
                  displayHeight={active === menuDetails.index ? '100vh' : '50vw'}
                  menuImage={menuDetails.image}
                  backgroundFill={menuDetails.backgroundFill}
                  onClick={() => setActive(menuDetails.index)}
                  >
                  {active !== menuDetails.index && menuDetails.tabName && <MenuName>{menuDetails.tabName}</MenuName>}
                  {active === menuDetails.index && 
                    menuDetails.tabValues.map(value => (
                      <MenuItemWrapper>
                        <MenuItemName>{value.title}</MenuItemName>
                        <MenuItemDetail>{value.detailedText}</MenuItemDetail>
                      </MenuItemWrapper>
                    ))
                  }
                </MenuBox>)
              )
            }
          </MenuWrapper>
          <CafeRant>
            <p>Dear Patron, welcome to Bodhi Greens - The Organic Vegan Cafe. Follow us on Instagram to support the work we do towards creating a more sustainable and compassionate future.</p>
            <p>We strive to give you the best experience of modern plant based cuisine that we have developed in the last six years of our culinary journey. We try to highlight native Indian organic ingredients infused with a range of international flavors.</p> 
            <p>Make sure to checkout our range of homemade desserts, and our products like tofu, peanut butter, sesame butter and more.</p>
          </CafeRant>
          <Footer>
            <FooterLeft>bodhigreens.in</FooterLeft>
            <FooterRight>@bodhigreens</FooterRight>
          </Footer>
          <FooterBottom>© Bodhigreens 2021-22</FooterBottom>
          <FooterCredit>Website made with ♥ by The High Lama</FooterCredit>
        </div>
    </div>
  );
}

export default App;


{/* <div className="App">
        <Header/>
        <div className="First-fold">
          <img src={screen} className="App-logo" alt="logo"></img>
          <div>Come and</div>
          <div>work alongside</div>
          <div>smart people.</div>
          <div className="Tabs-wrapper">
            <Tabs>
              <TabList>
                {Menudata.map(value => {
                  return(<Tab>{value.tabName}</Tab>);
                })}
              </TabList>

              {Menudata.map(menuDetails => (
                <TabPanel>
                <div className="job-panel-wrapper">
                  {
                    menuDetails.tabValues.map(value => (
                      <div className="job-panel">
                        <h4>{value.title}</h4>
                        <img src={arrow} className="Next-arrow" alt="logo"></img>
                        {value.detailedText && <div className="Detailed-text">{value.detailedText}</div>}
                        <div className="flex-apart">
                          <h6>{value.subTextLeft}</h6>
                          <h6>{value.subTextRight}</h6>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
        <div className="Menu-button">menu button</div>
    </div> */}
