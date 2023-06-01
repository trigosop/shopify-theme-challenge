import { Fragment, h, render } from 'preact';
import { SectionSchema } from './schema';

interface TabsProps {
    section: {
        settings: SectionSchema['settings'];
        blocks: SectionSchema['blocks'];
    };
}

function Tabs({ section }: TabsProps) {
    return (
        <div className="tabs" data-section-settings={JSON.stringify(section.settings)} data-section-blocks={JSON.stringify(section.blocks)}>
            <div className="tab-header bg-gray-200 py-2 px-4">
                {section.blocks.map((block, index) => (
                    <button
                        className="tab-button bg-[{{ block.settings.tab_color }}]-200 text-[{{ block.settings.tab_color }}]-800 hover:bg-[{{ block.settings.tab_color }}]-300 hover:text-[{{ block.settings.tab_color }}]-900 focus:bg-[{{block.settings.tab_color}}]-300 focus:text-[{{block.settings.tab_color}}]-900"
                        // onClick={() => changeTab(event, `tab${index}`)}
                        onClick={() => console.log('clicked!', `tab${index}`)}
                        key={index}
                    >
                        {block.settings.tab_title}
                    </button>
                ))}
            </div>

            <div className="tab-content p-4">
                {section.blocks.map((block, index) => (
                    <div id={`tab${index}`} className="tab-item hidden" key={index}>
                        {block.settings.tab_content}
                    </div>
                ))}
            </div>
        </div>
    );
}

const sectionData = document.querySelector('.tabs-section') as HTMLElement;
const container = document.querySelector('#container-app') as HTMLElement;

if (sectionData?.dataset) {
    const settings = JSON.parse(sectionData.dataset.sectionSettings || '{}');
    const blocks = JSON.parse(sectionData.dataset.sectionBlocks || '[]');

    render(<Tabs section={{ settings, blocks }} />, container);
}
