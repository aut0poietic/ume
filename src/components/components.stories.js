export default {
  title: 'Introduction',
  parameters: {
    options : { showPanel : false },
  }
};

export const AboutUme = () => `
  <h1>Project Ume</h1>
  <p>
    Ume is a framework for creating immersive, interactive elearning content. It's built using Web Components created in StencilJS, which
    allow users to create complex interactions knowing only HTML and the Ume tags. Once built, a Ume project can be delivered as a SCORM object 
    to any LMS that supports SCORM 1.2.
  </p>
  <p>
     This project (<em>"the framework"</em>) represents all the pieces needed to build an online training course.
     Additional projects in the Ume family will provide themes and a sample starter project with light build tools for packaging.
  </p>
  <p>
    However, Ume has always been and will always be targeted for use in the Ume Editor (codename tenjin) that will ease creation of Ume courses 
    and allow for more advanced behavior.
  </p>
  <H2>Structure</H2>
  <p>Ume components are broken into a few types:</p>
  <ul>
    <li>
        <strong>Building Blocks</strong><br/>
        These are fundamental atoms used to create the other components. These are typically simple and straightforward.
    </li>
    <li>
        <strong>Interactions</strong><br/>
        Interactions are just that: Compound components that create content delivery blocks, questions -- Learning Interactions. 
    </li>
    <li>
        <strong>Application</strong><br/>
        Elements used by the Ume application like pages, menus and such. 
    </li>
  </ul>
  <p>
    One of the philosophies behind Ume grew from a frustration with other authoring tools. We wanted a way to add more interactivity
    and graphic styling to interactions while combining them in different and surprising ways.
  </p>
  <p>
    Ume components are special: Nearly every Ume component can contain any other Ume component. Some of those combinations normal, expected;
    Like being able to add multiple, stacking Image or Animation components as backgrounds to any other component. Others, unexpected; Like, say,
    having your multiple choice questions inside a tab control. 
  </p>
  <p>
    Ume imposes no limitations. You want a carousel that contains cards that contains an accordion? While we feel for learners who take that course, 
    sure, why not.
  </p>
  <h2>Accessibility</h2>
  <p>
    Ume components adhere to WCAG 2.0 AA. Full stop.
  </p>
  <p>
    That means every interaction is accessible and usable. Everything that can be used with a mouse can be used with a keyboard in
    a natural way with minimal frustration. There are no muted colors that appear for the sake of aesthetics or distracting animations
    that make content hard to consume. Auto-playing audio and video are absent.
  </p>
  <p>
    Our feeling is: If it's worth sharing, it's worth making sure everyone can share, regardless of how they consume content.
  </p>
  <p>
    <em>This all said:</em> It is entirely possible to create courses with Ume that are not accessible. 
  </p>
  
  <h2>Influences</h2>
  <p>
    Ume is heavily inspired by the Adapt Framework and Authoring tools. These are amazing pieces of software. 
    If Ume becomes even 1/100th as useful as Adapt, I'll consider it a success.
  </p>
  <p>
    Much of the block concept (when not influenced by Adapt) comes via the Gutenberg editor from WordPress. 
    The Gutenberg team have developed something special and it's only growing more amazing. Some of the concepts and philosophy 
    in Gutenberg have found their way into Ume.
  </p>
`;


