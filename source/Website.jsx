import { Soda } from "@dorkodu/soda";

//* pages
import { Foreword }    from "./pages/Foreword";
import { Foundations } from "./pages/Foundations";
import { Styles }      from "./pages/Styles";
import { Components }  from "./pages/Components";
import { Oops }        from "./pages/Oops";

//* layouts
import { Header }   from "./layouts/Header";
import { Footer }   from "./layouts/Footer";

// TODO: implement routing using superpage
/*
let pageweaver = {
  map: {},
  fallback: ()=>{},
  run: function () {
    this.map.forEach(page => {
      superpage.route(page.url, () => {
        document.getElementById('contents').innerHTML = "";
        Soda.render(
          page.component,
          document.getElementById('contents')
        );
      });
    });

    superpage.fallback(this.fallback);
    
    superpage.run('hash', () => {
      document.getElementById('contents').innerHTML = "";
    });
  }
}

//? routemap
let pages = [
  {
    url: "/",
    component: <Foreword/>,
  },
  {
    url: "foundations",
    component: <Foundations/>,
  },
  {
    url: "styles",
    component: <Styles/>,
  },
  {
    url: "components",
    component: <Components/>,
  },
  {
    url: "oops",
    component: <Oops/>,
  }
];
*/

export function Website() {
  return (
    <div>
      <Header/>
      <main class="main" id="contents">
        <Components/>
      </main>
      <Footer/>
    </div>
  );
}
