import React, { useState, useRef, useEffect } from 'react';

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('role');
  const [height, setHeight] = useState('auto');
  const contentRef = useRef(null);

  // Update the height whenever activeTab changes
  useEffect(() => {
    if (contentRef.current) {
      // Get the height of the content
      const contentHeight = contentRef.current.scrollHeight;
      // Temporarily disable transitions to set the height instantly
      setHeight(contentHeight); 
    }
  }, [activeTab]);

  return (
    <div className="text-[20px] w-full p-4 bg-gray-100 text-gray-800">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab('role')}
          className={`text-[28px] px-4 py-2 font-semibold rounded ${
            activeTab === 'role' ? 'bg-[#F9D593] text-black shadow' : 'bg-white hover:bg-gray-200'
          }`}
        >
          My Role
        </button>
        <button
          onClick={() => setActiveTab('implementation')}
          className={`text-[28px] px-4 py-2 font-semibold rounded ${
            activeTab === 'implementation' ? 'bg-[#F9D593] text-black shadow' : 'bg-white hover:bg-gray-200'
          }`}
        >
          Project Implementation
        </button>
        <button
          onClick={() => setActiveTab('challenges')}
          className={`text-[28px] px-4 py-2 font-semibold rounded ${
            activeTab === 'challenges' ? 'bg-[#F9D593] text-black shadow' : 'bg-white hover:bg-gray-200'
          }`}
        >
          Challenges
        </button>
        <button
          onClick={() => setActiveTab('achievements')}
          className={`text-[28px] px-4 py-2 font-semibold rounded ${
            activeTab === 'achievements' ? 'bg-[#F9D593] text-black shadow' : 'bg-white hover:bg-gray-200'
          }`}
        >
          Achievements
        </button>
        <button
          onClick={() => setActiveTab('feedback')}
          className={`text-[28px] px-4 py-2 font-semibold rounded ${
            activeTab === 'feedback' ? 'bg-[#F9D593] text-black shadow' : 'bg-white hover:bg-gray-200'
          }`}
        >
          Feedback
        </button>
      </div>

      {/* Content Container with Transition */}
      <div 
        className="bg-white rounded shadow overflow-hidden transition-all duration-500 ease-in-out" 
        style={{ height: height, transitionProperty: 'height' }}
      >
        <div ref={contentRef} className="p-6">
          {activeTab === 'role' && (
            <div className="opacity-100 transition-opacity duration-300">
              <p className="mb-4 text-justify">
                As one of the lead practitioners, I was responsible for designing, implementing, and facilitating the workshops. My role involved engaging with the young participants, tailoring activities to meet their individual needs, coordinating with partner schools and community centers, and fostering an inclusive environment where every child felt valued. Additionally, I led CPD sessions for school staff and parents to ensure continuity of support and shared understanding.
              </p>
            </div>
          )}

          {activeTab === 'implementation' && (
            <div className="opacity-100 transition-opacity duration-300">
              {/* <h3 className="text-xl font-bold mb-4">Project Implementation</h3> */}
              <p className="mb-4 text-justify">
                The project launched in November 2023 and was conducted in partnership with Queensmead Primary Academy and Folville Junior School in Leicester. We alternated sessions weekly between the two schools, starting with introductory activities designed to build rapport and establish trust with the young participants.
              </p>
              <p className="mb-4 text-justify">
                Key activities included interactive games like "Pass the Clap" and "Hula Hoop Challenge," as well as creative musical exploration with instruments and digital tools such as loop pedals. Journaling was introduced as a way for participants to record their thoughts and musical ideas, providing a personalized outlet for creativity.
              </p>
              <p className="mb-4 text-justify">
                Workshops were held in small groups to ensure each child received individualized attention. Participants co-designed personalized learning plans, setting goals that aligned with their interests and needs. Over 12 sessions per group, participants explored music, built confidence, and created their own pieces of music to share in a celebration event.
              </p>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="opacity-100 transition-opacity duration-300">
              <p className="mb-4 text-justify">
                <b>Behavior and Focus at School 1</b> <br/>Some children struggled with focus and behavior in sessions. To address this, we encouraged them to create their own rules and expectations for the workshops. This approach fostered a sense of ownership and responsibility, improving overall engagement.
              </p>
              <p className="mb-4 text-justify">
                <b>Reserved Nature at School 2</b> <br/>Participants at Folville were more reserved and hesitant to share ideas. Journaling and one-on-one activities provided a safe space for these children to express themselves at their own pace.
              </p>
              <p className="mb-4 text-justify">
                <b>Balancing Individual and Group Dynamics</b> <br/>At school 2, one-on-one activities were most effective, while at school 1, the children thrived in group settings. Adapting activities to suit each school’s dynamics was a key part of the project’s success.
              </p>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="opacity-100 transition-opacity duration-300 text-justify">
              {/* <h3 className="text-xl font-bold mb-4">Achievements</h3> */}
              <p className="mb-4"><b>Increased Confidence</b> <br/> Participants gained confidence over time, transforming from hesitant observers to active contributors.</p>
              <p className="mb-4"><b>Musical Development</b> <br/> Children explored various instruments and digital tools, developing their creativity and musicality.</p>
              <p className="mb-4"><b>Personalized Engagement</b> <br/> Tailoring sessions to individual needs ensured that all participants felt included and valued.</p>
              <p className="mb-4"><b>Empowerment Through Ownership</b> <br/> Allowing children to create their own rules and rituals fostered a sense of autonomy and self-expression.</p>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="opacity-100 transition-opacity duration-300 text-justify text-[25px]">
              <p className="mb-4"><b>Participants</b> <br/> Children expressed enjoyment and pride in their creations, with many describing the sessions as the highlight of their week.</p>
              <p className="mb-4"><b>Parents</b> <br/> Noted improvements in their children’s confidence and communication skills.</p>
              <p className="mb-4"><b>Staff</b> <br/> Teachers appreciated the tailored, inclusive approach, observing increased enthusiasm and engagement in music activities.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
