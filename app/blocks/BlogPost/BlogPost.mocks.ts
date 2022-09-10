import {generateUid} from '@/.storybook/mocks'

import {BlogPost} from './BlogPost'

export const mockBlogPost = (props?: Partial<BlogPost>): BlogPost => {
  return {
    _uid: generateUid(),
    component: 'blog-post',
    richtext: {
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: {
            level: 1,
          },
          content: [
            {
              text: 'Heading 1',
              type: 'text',
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 2,
          },
          content: [
            {
              text: 'Heading 2',
              type: 'text',
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 3,
          },
          content: [
            {
              text: 'Heading 3',
              type: 'text',
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 4,
          },
          content: [
            {
              text: 'Heading 4',
              type: 'text',
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 5,
          },
          content: [
            {
              text: 'Heading 5',
              type: 'text',
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 6,
          },
          content: [
            {
              text: 'Heading 6',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Bold',
              type: 'text',
              marks: [
                {
                  type: 'bold',
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Italic',
              type: 'text',
              marks: [
                {
                  type: 'italic',
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Strike through',
              type: 'text',
              marks: [
                {
                  type: 'strike',
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Underline',
              type: 'text',
              marks: [
                {
                  type: 'underline',
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Code inline',
              type: 'text',
              marks: [
                {
                  type: 'code',
                },
              ],
            },
          ],
        },
        {
          type: 'code_block',
          attrs: {
            class: 'language-javascript',
          },
          content: [
            {
              text: 'Code block',
              type: 'text',
            },
          ],
        },
        {
          type: 'bullet_list',
          content: [
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Bullet list',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Bullet list',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Bullet list',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'ordered_list',
          attrs: {
            order: 1,
          },
          content: [
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Ordered list',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Ordered list',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Ordered list',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'blockquote',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Quote',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          type: 'horizontal_rule',
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Internal link',
              type: 'text',
              marks: [
                {
                  type: 'link',
                  attrs: {
                    href: '/hello-world',
                    uuid: generateUid(),
                    anchor: null,
                    target: '_self',
                    linktype: 'story',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'External link',
              type: 'text',
              marks: [
                {
                  type: 'link',
                  attrs: {
                    href: 'htttps://pelo.studio',
                    uuid: null,
                    anchor: null,
                    target: '_blank',
                    linktype: 'url',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'image',
              attrs: {
                alt: '',
                src: '/image.jpeg',
                title: '',
              },
            },
          ],
        },
        {
          type: 'blok',
          attrs: {
            id: generateUid(),
            body: [],
          },
        },
        {
          type: 'paragraph',
        },
        {
          type: 'horizontal_rule',
        },
        {
          type: 'horizontal_rule',
        },
        {
          type: 'horizontal_rule',
        },
        {
          type: 'heading',
          attrs: {
            level: 1,
          },
          content: [
            {
              text: "Are you crazy? I can't swallow that.",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "Fry, we have a crate to deliver. No argument here. Yes, if you make it look like an electrical fire. When you do things right, people won't be sure you've done anything at all. I just told you! You've killed me!",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'You guys realize you live in a sewer, right? A true inspiration for the children. ',
              type: 'text',
            },
            {
              text: 'Fry!',
              type: 'text',
              marks: [
                {
                  type: 'bold',
                },
              ],
            },
            {
              text: ' ',
              type: 'text',
            },
            {
              text: 'Quit doing the right thing, you jerk!',
              type: 'text',
              marks: [
                {
                  type: 'italic',
                },
              ],
            },
            {
              text: " I could if you hadn't turned on the light and shut off my stereo.",
              type: 'text',
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 2,
          },
          content: [
            {
              text: "You won't have time for sleeping, soldier, not with all the bed making you'll be doing.",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "As an interesting side note, as a head without a body, I envy the dead. Guess again. They're like sex, except I'm having them! Fry, we have a crate to deliver. Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence.",
              type: 'text',
            },
          ],
        },
        {
          type: 'ordered_list',
          attrs: {
            order: 1,
          },
          content: [
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: "It doesn't look so shiny to me.",
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'You are the last hope of the universe.',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Now, now. Perfectly symmetrical violence never solved anything.',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'heading',
          attrs: {
            level: 3,
          },
          content: [
            {
              text: "Oh, you're a dollar naughtier than most.",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "It must be wonderful. Bite my shiny metal ass. The alien mothership is in orbit here. If we can hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.",
              type: 'text',
            },
          ],
        },
        {
          type: 'bullet_list',
          content: [
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'The alien mothership is in orbit here. If we can hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: 'Soothe us with sweet lies.',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list_item',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    {
                      text: "Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "And when we woke up, we had these bodies. Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages! Michelle, I don't regret this, but I both rue and lament it. For example, if you killed your grandfather, you'd cease to exist!",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'image',
              attrs: {
                alt: '',
                src: '/image.jpeg',
                title: '',
              },
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! I don't know what you did, Fry, but once again, you screwed up! Now all the planets are gonna start cracking wise about our mamas.",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "Shut up and take my money! Hello Morbo, how's the family? Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans! Now that the, uh, garbage ball is in space, Doctor, perhaps you can help me with my sexual inhibitions?",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'image',
              attrs: {
                alt: '',
                src: '/image.jpeg',
                title: '',
              },
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Now, now. Perfectly symmetrical violence never solved anything. Hello, little man. I will destroy you! Is the Space Pope reptilian!? I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.',
              type: 'text',
            },
          ],
        },
        {
          type: 'blok',
          attrs: {
            id: generateUid(),
            body: [
              {
                _uid: generateUid(),
                label: 'Fillerama @ Futurama',
                component: 'tag',
              },
            ],
          },
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Soothe us with sweet lies. Ask her how her day was. You\'re going back for the Countess, aren\'t you? When I was first asked to make a film about my nephew, Hubert Farnsworth, I thought "Why should I?" Then later, Leela made the film. But if I did make it, you can bet there would have been more topless women on motorcycles. Roll film!',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: 'Then throw her in the laundry room, which will hereafter be referred to as "the brig". Why, those are the Grunka-Lunkas! They work here in the Slurm factory. I never loved you. Anyone who laughs is a communist!',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "I daresay that Fry has discovered the smelliest object in the known universe! Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon.",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. Hey, what kinda party is this? There's no booze and only one hooker. Bender, you risked your life to save me! Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "These old Doomsday Devices are dangerously unstable. I'll rest easier not knowing where they are. Aww, it's true. I've been hiding it for so long. Leela's gonna kill me. And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!",
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence. Negative, bossy meat creature! You don't know how to do any of those. I was having the most wonderful dream. Except you were there, and you were there, and you were there!",
              type: 'text',
            },
          ],
        },
      ],
    },
    ...props,
  }
}
