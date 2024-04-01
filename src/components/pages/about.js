import React from 'react'
import '../css/about.css'
import { Link } from 'react-router-dom'
const About = () => {

  return (
    <div className='about'>
      <p><span className="item">PROJECT NAME:</span><span className="value">life-plan</span></p>
      <p><span className="item">PROJECT DESCRIPTION:</span><span className="value">Planning for life</span></p>
      <p><span className="item">PROBLEM:</span><span className="value">A majority of people spend more time planning for a Saturday afternoon party or a Thanksgiving dinner than they do planning for their lives.  Most of the time, things just happen, and we wait to see where we end up.  In a recent Ted Talk, someone posed the question, if we each had grid on the wall the had a small square to represent each week for ninety years (about the lifespan of a human being, 4680 boxes), that gets checked off to show how many were gone, and how many were remaining, how might that alter how we live our lives, how we perceived the passage of time? </span></p>
      <p><span className="item">SOLUTION:</span><span className="value">I thought let me build an app that does that. Joe Kidd could enter his birthday, get his 4680 boxes, displayed, with the past grayed out.  He can go in and enter past accomplishments and their associated dates.  and he can plan out the rest of his life.  He can also enter specific goals, or projects, with planned start and end dates, then track his progress over time. Those project accomplishment will be visible as part of the big board of 4680 blocks.  </span>
      <ul>
      <p className="item">Users can plan:</p>
        <li>Scheduling for plans use API's to existing calendar apps (like iCal, google Calendar, or a proprietary calendar)</li>
        <li>Life Plan Guides for specific outcomes such as: Doctor, Lawyer, Software Engineer, Game Developer, Wife/Mother, Husband/Father, Home Owner, Musician, LifePath(90yrs)</li>
      </ul></p>
      
        <span>
          <ul>
            <p className="item">Features:</p>
            <li>User registration and login, password reset, two factor authentication, etc.</li>
            <li>90 YEAR GRID - Each grid cell will represent one calendar week of planning.</li>
            <li>clicking on a block should display the calendar week represented by that block. For instance if someone created an account for a child born yesterday, clicking the first box would display a calendar week for this week. The calendar week for each individual starts with their birthday in the week  of their birth.</li>
            <li>This in not intended to be a project management system...it is intended only to track people's overall plans for life, and keep track of accomplishments against those overall general plans. If someone plans to go to college, they might plan to finish in 4 years, and they might actually finish in 5, 6, 10 or 20 years.  Having a broad view of how plans are going, might be useful in answering questions like:
              <ul>
                <li>What got in the way of my plans?</li>
                <li>How can I stay on track in the future?</li>
                <li>Where else in my life are my planned target dates in jeopardy?</li>
                <li>Are any oe my plans dependent on accomplishing other plans?</li>
              </ul>
            </li>
            <li>Weekly affirmations, inspiration and encouragement and empowerment to help people stay on track, and support them when the encounter failure. Like Churchill once said, "Success is going from failure to failure with no loss of enthusiasm!"</li>
            <li>Games that educate people on "right thinking" and cultivating a culture of positive forward looking thought processes.</li>
            <li>Absolutely no push advertising!!!!  There will be a page for ads that people can visit voluntarily.  What they view or click on will not be tracked unless they voluntarily save as a favorite or follow.</li>
            <li>Access to coaching</li>
            <li>Easy access via smart phone or tablet</li>
            <li>Easy to schedule actions/activities, tasks, reminders using both keyboard and voice commands</li>
            <li>highlight scheduling and resource conflicts; suggest conflict resolution in line with planned outcomes.</li>
          </ul>
        </span>

      <p><span className="item">Paradigm We Live by:</span><span className="value">When it comes to planning or success in life, very vew people actually plan. People start out with hopeful and optimistic goals and dreams! Remember?  What did you dream of becoming when you were a teen?  But by the time we graduate high school, if we ever do, we may still be hopeful, but we now firmly believe that reaching our life-goal, our dreams, will require four to six years of hard work in college, and maybe another two, three or more years pursuing a masters degree.  But the overall feeling is that its too hard to accomplish our goals--we wait, we try something easier, shortcuts, and ultimately, we giv up trying and simply drift where the wind takes us.
      
      So what happens?  On average our progress through life follows a path similar to:
      <ol>
        <li>Birth</li>
        <li>Grow up</li>
        <li>Graduate High School</li>
        <li>Attend College (possibly)</li>
        <li>Work for 45 years</li>
        <li>Retire</li>
        <li>Return to our early dreams (sometimes)</li>
        <li>Reminisce and prepare for the end</li>
      </ol> 
        </span></p>
        <p>The whole process takes about 90 years. <span className="smaller ital">(25 years of growth from birth + work for 45 years, + retirement for 20 years = 90 years.)</span></p>
        <p>But we don't plan.  In my later years, I started to realize the there were things I didn't know while I was growing up, things that no one told me, things I didn't know enough to ask about on my own.</p>
        <p>For example, I wish someone had taken the time to sit me down and explain the importance of a college education and the impact going to college would have on my future.  Or the importance of college prep courses to prepare me for the rigors of college study.  Or even, in my specific case, given the I wasn't prepared when I graduated high school, if I knew that doing a year or two at a community college would have enabled me to more easily transition to the much more challenging college-level curriculum.</p>
        <p>As it was, I ended up switching majors after the first years, and I dropped out after the 2nd year of college.  I then attempted night school, struggling my way through another two years, as well as several vocational schools, never realizing that I did not have the foundation for college level work! And of course, never completing a bachelor's degree program.</p>
        <p>This app will empower people in achieving life goals by helping people visualize where they are relative to where they want to be, and providing straight-talk suggestions, coaching, with examples of how they can map out specific goals.</p>
        <p>Perhaps the best definition of "success" in life, is having goals achieved intentionally. Planning is essential to that type of achievement.  Any great thing that was ever achieved was planned before it was attempted.  Everything from a simple individual house to projects the size of the Palm Islands in the U.A.E., was planned, and those plans were then implemented successfully. Planned goals, planned actions, </p>
        <p></p>
      <p><span className="item">Trello Board:</span><span className="value"><a href='https://trello.com/b/gqD5hFDx/backend' target='_blank'>Life Plan </a></span></p>
      <p><span className="item">Developers:</span><span className="value">Kenti Johnson</span></p>
      <p><span className="item">copyright</span><span className="value">(c) 2024</span></p>

    </div>
  )
}

export default About