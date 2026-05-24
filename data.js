// ========== ENHANCED MOCK MANHWA DATA ==========
const SERIES_DATA = [
    {
        id: 'shadow-monarch',
        title: 'Shadow Monarch',
        author: 'Park Sungjin',
        genres: ['Action', 'Fantasy'],
        status: 'Ongoing',
        rating: 4.8,
        ratingCount: 12450,
        chapters: 156,
        description: 'When the weakest hunter in the world discovers a hidden power within the shadows, he must rise through the ranks to face an ancient evil that threatens to consume all of humanity.',
        colors: ['#1a1a2e', '#16213e', '#e94560'],
        featured: true,
        trending: true,
        chapterList: [
            { num: 1, title: 'The Weakest Hunter', date: '2024-01-15' },
            { num: 2, title: 'Double Dungeon', date: '2024-01-22' },
            { num: 3, title: 'System Awakens', date: '2024-01-29' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'city', narration: 'In a world where gates open to monster-filled dungeons, hunters protect humanity. But not all hunters are created equal...', characters: [], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.6, color: 'rgba(100,150,200,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.65, y: 0.3, text: "Another E-rank gate? This is pointless...", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(100,150,200,0.6)', expression: 'angry' },
                            { x: 0.2, y: 0.55, color: 'rgba(200,100,100,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.75, y: 0.25, text: "Jinwoo, you should just quit. You'll die in there.", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'dungeon', narration: "Jinwoo entered the E-rank gate alone. No party would take him. No one believed he could survive.", characters: [
                            { x: 0.5, y: 0.65, color: 'rgba(100,150,200,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                    ]
                },
                {
                    scene: 'dungeon',
                    panels: [
                        { type: 'normal', scene: 'dungeon', narration: '', characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(100,150,200,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.7, y: 0.2, text: "I won't die here. Not today.", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'fight', narration: '', characters: [
                            { x: 0.3, y: 0.5, color: 'rgba(100,150,200,0.6)', expression: 'angry' },
                            { x: 0.7, y: 0.5, color: 'rgba(150,50,50,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.15, text: "A giant spider emerged from the darkness!", type: 'thought' }
                        ] },
                        { type: 'normal', scene: 'fight', narration: '', characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(100,150,200,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "GRAAHH!", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'dungeon', narration: "As Jinwoo lay bleeding, something changed. A blue screen appeared before his eyes...", characters: [
                            { x: 0.5, y: 0.7, color: 'rgba(100,150,200,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.3, text: "[ SYSTEM ] Player has been selected.", type: 'thought' }
                        ] },
                    ]
                },
                {
                    scene: 'dungeon',
                    panels: [
                        { type: 'wide', scene: 'magic', narration: '', characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(100,150,200,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "W-What is this...?", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'magic', narration: "The system offered him a choice: accept the power of shadows, or die forgotten.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'dungeon', narration: '', characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(100,150,200,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "I accept. Give me the power to survive.", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'magic', narration: "Dark shadows erupted from the ground, wrapping around Jinwoo's body. The weakest hunter had just become something else entirely.", characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(50,50,100,0.8)', expression: 'neutral' }
                        ], dialogue: [] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'dungeon',
                    panels: [
                        { type: 'wide', scene: 'dungeon', narration: "Three days after the incident. Jinwoo woke up in a hospital bed, but everything had changed.", characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(100,150,200,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.6, color: 'rgba(100,150,200,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.65, y: 0.25, text: "Status window... it's still there.", type: 'thought' }
                        ] },
                        { type: 'wide', scene: 'dungeon', narration: '', characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(100,150,200,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "[QUEST] Clear the Double Dungeon. Reward: Shadow Extraction.", type: 'thought' }
                        ] },
                    ]
                },
                {
                    scene: 'dungeon',
                    panels: [
                        { type: 'normal', scene: 'dungeon', narration: '', characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(100,150,200,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "A double dungeon... this is a death trap.", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'fight', narration: "The double dungeon was unlike anything Jinwoo had faced. Two boss rooms, no escape.", characters: [
                            { x: 0.4, y: 0.5, color: 'rgba(100,150,200,0.6)', expression: 'angry' },
                            { x: 0.7, y: 0.5, color: 'rgba(100,50,50,0.7)', expression: 'neutral' }
                        ], dialogue: [] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'magic',
                    panels: [
                        { type: 'wide', scene: 'magic', narration: "After clearing the double dungeon, Jinwoo discovered his true ability: Shadow Extraction.", characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(50,50,100,0.8)', expression: 'happy' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'dungeon', narration: '', characters: [
                            { x: 0.3, y: 0.5, color: 'rgba(50,50,100,0.8)', expression: 'happy' },
                            { x: 0.7, y: 0.5, color: 'rgba(40,40,80,0.7)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "Arise.", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'magic', narration: "The fallen monster rose as a shadow soldier, bound to Jinwoo's will. The Shadow Monarch had awakened.", characters: [
                            { x: 0.4, y: 0.5, color: 'rgba(50,50,100,0.8)', expression: 'neutral' },
                            { x: 0.7, y: 0.5, color: 'rgba(30,30,60,0.9)', expression: 'neutral' }
                        ], dialogue: [] },
                    ]
                }
            ]
        }
    },
    {
        id: 'crimson-hearts',
        title: 'Crimson Hearts',
        author: 'Kim Yuna',
        genres: ['Romance', 'Drama'],
        status: 'Ongoing',
        rating: 4.6,
        ratingCount: 8900,
        chapters: 89,
        description: "Two heirs from rival corporate empires find themselves drawn together despite their families' bitter war.",
        colors: ['#8B0035', '#C41E3A', '#FFB6C1'],
        featured: true,
        trending: false,
        chapterList: [
            { num: 1, title: 'Clashing Worlds', date: '2024-02-01' },
            { num: 2, title: 'The Gala', date: '2024-02-08' },
            { num: 3, title: 'Secret Meetings', date: '2024-02-15' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'city', narration: "Seoul's skyline glittered beneath the autumn moon. Two empires, one city, and a war that had lasted decades.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.7, y: 0.25, text: "Father wants me to attend the Hana Corp gala tonight.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(180,80,100,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.65, y: 0.2, text: "Spy on them, Haerin. Find their weakness.", type: 'speech' }
                        ] },
                    ]
                },
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'indoor', narration: "The Hana Corp Annual Gala. Crystal chandeliers, expensive suits, and fake smiles.", characters: [
                            { x: 0.3, y: 0.6, color: 'rgba(200,100,120,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'neutral' },
                            { x: 0.7, y: 0.55, color: 'rgba(100,130,200,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "You must be from Taewoo Group. I'm Minjae.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.65, y: 0.25, text: "Haerin. And you should know... we're not friends.", type: 'speech' }
                        ] },
                    ]
                },
                {
                    scene: 'city',
                    panels: [
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.7, y: 0.55, color: 'rgba(100,130,200,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.4, y: 0.25, text: "Funny. I was about to say the same thing.", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'night', narration: "They talked for hours that night. About everything except business. About everything their families would never allow.", characters: [
                            { x: 0.35, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'happy' },
                            { x: 0.65, y: 0.55, color: 'rgba(100,130,200,0.6)', expression: 'happy' }
                        ], dialogue: [] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'city', narration: "A week after the gala. Haerin couldn't stop thinking about him.", characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "This is ridiculous. He's the enemy.", type: 'thought' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "...But his smile.", type: 'thought' }
                        ] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'night', narration: "They met in secret. A quiet cafe on the outskirts of the city, far from prying eyes.", characters: [
                            { x: 0.35, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'happy' },
                            { x: 0.65, y: 0.55, color: 'rgba(100,130,200,0.6)', expression: 'happy' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.65, y: 0.55, color: 'rgba(100,130,200,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.4, y: 0.25, text: "If our families find out...", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.35, y: 0.55, color: 'rgba(200,100,120,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.65, y: 0.2, text: "Then we'll face it together.", type: 'speech' }
                        ] },
                    ]
                }
            ]
        }
    },
    {
        id: 'neon-district',
        title: 'Neon District',
        author: 'Jeon Hyejin',
        genres: ['Sci-Fi'],
        status: 'Completed',
        rating: 4.7,
        ratingCount: 11200,
        chapters: 200,
        description: "In 2187, detective Kang Soojin patrols the neon-drenched streets of Neo-Seoul, investigating crimes committed by rogue AIs.",
        colors: ['#0a0a2a', '#00d4ff', '#00ff88'],
        featured: false,
        trending: true,
        chapterList: [
            { num: 1, title: 'Neon Rain', date: '2023-06-01' },
            { num: 2, title: 'The Android', date: '2023-06-08' },
            { num: 3, title: 'Ghost in the Grid', date: '2023-06-15' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'rain', narration: "Neo-Seoul, 2187. The rain never stops in the Neon District. Neither do the crimes.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'rain', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(100,200,220,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "Another AI-related homicide. Third one this week.", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'city', narration: "Detective Kang Soojin had seen it all. Rogue AIs, cyber-enhanced criminals, corporate conspiracies. But this case was different.", characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(100,200,220,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                    ]
                },
                {
                    scene: 'city',
                    panels: [
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(100,200,220,0.6)', expression: 'neutral' },
                            { x: 0.7, y: 0.55, color: 'rgba(200,200,200,0.5)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.15, text: "I am Unit-7. I did not kill anyone. I can prove it.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(100,200,220,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.65, y: 0.25, text: "AIs always say that. Show me proof.", type: 'speech' }
                        ] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'city', narration: "Unit-7 led Soojin through the underbelly of Neo-Seoul, to places no human had gone before.", characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(100,200,220,0.6)', expression: 'neutral' },
                            { x: 0.7, y: 0.55, color: 'rgba(200,200,200,0.5)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.7, y: 0.55, color: 'rgba(200,200,200,0.5)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.4, y: 0.2, text: "The real killer is in the Grid. A virus wearing human skin.", type: 'speech' }
                        ] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'fight', narration: "The final confrontation. Deep in the Grid, where reality and code blur.", characters: [
                            { x: 0.4, y: 0.5, color: 'rgba(100,200,220,0.6)', expression: 'angry' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'magic', narration: '', characters: [
                            { x: 0.5, y: 0.5, color: 'rgba(100,200,220,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "It's over. Shut it down.", type: 'speech' }
                        ] },
                    ]
                }
            ]
        }
    },
    {
        id: 'last-alchemist',
        title: 'The Last Alchemist',
        author: 'Yoon Seoah',
        genres: ['Fantasy'],
        status: 'Ongoing',
        rating: 4.5,
        ratingCount: 6700,
        chapters: 45,
        description: "Young alchemist Aria embarks on a desperate quest to find the legendary Philosopher's Stone.",
        colors: ['#8B6914', '#DAA520', '#FFD700'],
        featured: false,
        trending: false,
        chapterList: [
            { num: 1, title: 'The Dying Master', date: '2024-03-01' },
            { num: 2, title: 'The First Ingredient', date: '2024-03-08' },
            { num: 3, title: 'The Forbidden Text', date: '2024-03-15' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'indoor',
                    panels: [
                        { type: 'wide', scene: 'indoor', narration: "The alchemist's tower smelled of herbs and regret. Master Eldon lay in bed, his breath growing weaker by the hour.", characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(200,180,100,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(220,200,120,0.6)', expression: 'angry' },
                            { x: 0.7, y: 0.6, color: 'rgba(180,160,100,0.5)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "Master, I won't let you die. I'll find the Stone.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.7, y: 0.6, color: 'rgba(180,160,100,0.5)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.4, y: 0.25, text: "Child... the path of transmutation demands sacrifice.", type: 'speech' }
                        ] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'forest',
                    panels: [
                        { type: 'wide', scene: 'forest', narration: "The first ingredient lay deep in the Whispering Woods: a moonpetal flower that blooms only under a blood moon.", characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(220,200,120,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'forest', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(220,200,120,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "There it is... the moonpetal!", type: 'speech' }
                        ] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'dungeon',
                    panels: [
                        { type: 'wide', scene: 'dungeon', narration: "The forbidden text was hidden beneath the old library, sealed by magic centuries ago.", characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(220,200,120,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'magic', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(220,200,120,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "The Codex of Transmutation... it's real.", type: 'thought' }
                        ] },
                    ]
                }
            ]
        }
    },
    {
        id: 'campus-life',
        title: 'Campus Life',
        author: 'Choi Minho',
        genres: ['Comedy', 'Slice of Life'],
        status: 'Ongoing',
        rating: 4.3,
        ratingCount: 15600,
        chapters: 234,
        description: "University freshmen navigate the chaos of dorm life, impossible exams, and the eternal question: is it okay to eat ramen for every meal?",
        colors: ['#FF9F43', '#FECA57', '#54A0FF'],
        featured: true,
        trending: true,
        chapterList: [
            { num: 1, title: 'Move-In Day', date: '2023-09-01' },
            { num: 2, title: 'The Exam Crisis', date: '2023-09-08' },
            { num: 3, title: 'Club Recruitment', date: '2023-09-15' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'school',
                    panels: [
                        { type: 'wide', scene: 'school', narration: "September 1st. Move-in day at Hankuk University. The beginning of freedom... or chaos.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(255,180,80,0.6)', expression: 'happy' },
                            { x: 0.7, y: 0.55, color: 'rgba(100,150,255,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "Room 413! I'm Soomin, your new roommate!", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.7, y: 0.55, color: 'rgba(100,150,255,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.4, y: 0.25, text: "...Taehyun. Please don't be loud.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(255,180,80,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.65, y: 0.2, text: "Too late! I already brought speakers!", type: 'speech' }
                        ] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'school',
                    panels: [
                        { type: 'wide', scene: 'indoor', narration: "Week 2. Midterms announced. Panic ensued.", characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(255,180,80,0.6)', expression: 'angry' },
                            { x: 0.6, y: 0.55, color: 'rgba(100,150,255,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(255,180,80,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.65, y: 0.2, text: "THE EXAM IS TOMORROW?! I thought it was next week!", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.6, y: 0.55, color: 'rgba(100,150,255,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.35, y: 0.25, text: "I told you three times. You were gaming.", type: 'speech' }
                        ] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'school',
                    panels: [
                        { type: 'wide', scene: 'school', narration: "Club recruitment week. Every club wanted fresh blood.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(255,180,80,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "The Ramen Appreciation Club? I'm IN!", type: 'speech' }
                        ] },
                    ]
                }
            ]
        }
    },
    {
        id: 'whispering-shadows',
        title: 'Whispering Shadows',
        author: 'Baek Soojin',
        genres: ['Horror'],
        status: 'Ongoing',
        rating: 4.4,
        ratingCount: 5300,
        chapters: 78,
        description: "When residents begin hearing whispers from empty rooms, new tenant Mina brushes it off\u2014until the voices start calling her name.",
        colors: ['#1a0a0a', '#2d1f1f', '#8B0000'],
        featured: false,
        trending: false,
        chapterList: [
            { num: 1, title: 'Unit 13B', date: '2023-11-01' },
            { num: 2, title: 'The Walls Speak', date: '2023-11-08' },
            { num: 3, title: 'The Pattern', date: '2023-11-15' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'night',
                    panels: [
                        { type: 'wide', scene: 'night', narration: "Ashwood Apartments. Unit 13B. The rent was suspiciously cheap. Mina found out why.", characters: [
                            { x: 0.5, y: 0.6, color: 'rgba(180,150,150,0.6)', expression: 'neutral' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(180,150,150,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "Hello? Is someone there?", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: "The whisper came again. Not from the hallway. Not from the neighbor's unit. From inside the walls.", characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(180,150,150,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "...Mi...na...", type: 'thought' }
                        ] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'night',
                    panels: [
                        { type: 'wide', scene: 'indoor', narration: "Night three. The whispers grew louder. More distinct. They knew her name.", characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(180,150,150,0.6)', expression: 'angry' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(180,150,150,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "WHO ARE YOU?!", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: "The walls trembled. Something ancient was waking up.", characters: [], dialogue: [] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'night',
                    panels: [
                        { type: 'wide', scene: 'indoor', narration: "Mina found the pattern. Every tenant in 13B had heard the whispers. Every tenant had disappeared.", characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(180,150,150,0.6)', expression: 'angry' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(180,150,150,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "I won't be next. I'll find out what you are.", type: 'speech' }
                        ] },
                    ]
                }
            ]
        }
    },
    {
        id: 'dragons-oath',
        title: "Dragon's Oath",
        author: 'Lee Jaehwan',
        genres: ['Fantasy', 'Action'],
        status: 'Ongoing',
        rating: 4.9,
        ratingCount: 15600,
        chapters: 234,
        description: "Kai discovers he is the last of the dragon riders, chosen by an ancient dragon to fulfill a prophecy.",
        colors: ['#1B1464', '#2E86C1', '#F39C12'],
        featured: true,
        trending: true,
        chapterList: [
            { num: 1, title: 'The Last Rider', date: '2023-12-01' },
            { num: 2, title: "The Dragon's Call", date: '2023-12-08' },
            { num: 3, title: 'War Council', date: '2023-12-15' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'forest',
                    panels: [
                        { type: 'wide', scene: 'forest', narration: "The dragons vanished a thousand years ago. Or so the world believed.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'forest', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(100,150,220,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "What... what are you?", type: 'speech' }
                        ] },
                        { type: 'wide', scene: 'magic', narration: "A massive dragon descended from the clouds, its scales shimmering like liquid sapphire.", characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(100,150,220,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.65, y: 0.3, text: "I am Ignis. And you, young Kai, are my rider.", type: 'speech' }
                        ] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'magic',
                    panels: [
                        { type: 'wide', scene: 'magic', narration: "The bond between rider and dragon is forged in fire and trust.", characters: [
                            { x: 0.3, y: 0.55, color: 'rgba(100,150,220,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.6, y: 0.3, text: "Climb on, rider. Let me show you the sky.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'magic', narration: '', characters: [
                            { x: 0.4, y: 0.5, color: 'rgba(100,150,220,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.6, y: 0.2, text: "This is... incredible!", type: 'speech' }
                        ] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'city',
                    panels: [
                        { type: 'wide', scene: 'city', narration: "The War Council of the Five Kingdoms. An ancient darkness was spreading from the north.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.5, y: 0.55, color: 'rgba(100,150,220,0.6)', expression: 'angry' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "The Void is coming. And only a dragon rider can stop it.", type: 'speech' }
                        ] },
                    ]
                }
            ]
        }
    },
    {
        id: 'starlight-express',
        title: 'Starlight Express',
        author: 'Han Jiwoo',
        genres: ['Romance', 'Sci-Fi'],
        status: 'Completed',
        rating: 4.6,
        ratingCount: 7800,
        chapters: 56,
        description: "Aboard orbital station Helios-7, engineer Yuna falls for a mysterious passenger with a devastating secret.",
        colors: ['#2D1B69', '#7B2FBE', '#FF6EC7'],
        featured: false,
        trending: false,
        chapterList: [
            { num: 1, title: 'Arrival', date: '2024-04-01' },
            { num: 2, title: 'The Garden Module', date: '2024-04-08' },
            { num: 3, title: 'Signal Lost', date: '2024-04-15' },
        ],
        storyPages: {
            1: [
                {
                    scene: 'space',
                    panels: [
                        { type: 'wide', scene: 'space', narration: "Helios-7. An orbital station home to 10,000 souls drifting between Earth and Mars.", characters: [], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(180,130,220,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.7, y: 0.2, text: "New passenger shuttle docking. Another tourist.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(180,130,220,0.6)', expression: 'neutral' },
                            { x: 0.7, y: 0.55, color: 'rgba(220,180,220,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.5, y: 0.2, text: "I'm not a tourist. I'm here to stay.", type: 'speech' }
                        ] },
                    ]
                }
            ],
            2: [
                {
                    scene: 'space',
                    panels: [
                        { type: 'wide', scene: 'indoor', narration: "The Garden Module. The only place on Helios-7 where real flowers grew. Yuna found him there.", characters: [
                            { x: 0.35, y: 0.55, color: 'rgba(180,130,220,0.6)', expression: 'happy' },
                            { x: 0.65, y: 0.55, color: 'rgba(220,180,220,0.6)', expression: 'happy' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.35, y: 0.55, color: 'rgba(180,130,220,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.65, y: 0.2, text: "You like flowers? Most people here prefer hydroponics.", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.65, y: 0.55, color: 'rgba(220,180,220,0.6)', expression: 'happy' }
                        ], dialogue: [
                            { x: 0.35, y: 0.25, text: "Flowers remind me of Earth. Of home.", type: 'speech' }
                        ] },
                    ]
                }
            ],
            3: [
                {
                    scene: 'space',
                    panels: [
                        { type: 'wide', scene: 'space', narration: "Signal lost. Communication with Earth cut off. And Yuna discovered the truth about him.", characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(180,130,220,0.6)', expression: 'angry' }
                        ], dialogue: [] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.4, y: 0.55, color: 'rgba(180,130,220,0.6)', expression: 'angry' },
                            { x: 0.7, y: 0.55, color: 'rgba(220,180,220,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.5, y: 0.15, text: "You're a fugitive?! What else have you lied about?!", type: 'speech' }
                        ] },
                        { type: 'normal', scene: 'indoor', narration: '', characters: [
                            { x: 0.7, y: 0.55, color: 'rgba(220,180,220,0.6)', expression: 'neutral' }
                        ], dialogue: [
                            { x: 0.4, y: 0.25, text: "Everything except how I feel about you.", type: 'speech' }
                        ] },
                    ]
                }
            ]
        }
    }
];

const ALL_GENRES = ['All', 'Action', 'Romance', 'Fantasy', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Slice of Life'];
const SORT_OPTIONS = ['Popular', 'Latest', 'Rating', 'A-Z'];

// Storage helpers
const Storage = {
    get(key, fallback) {
        try { return JSON.parse(localStorage.getItem('mv_' + key)) || fallback; }
        catch { return fallback; }
    },
    set(key, val) { localStorage.setItem('mv_' + key, JSON.stringify(val)); }
};

if (!Storage.get('bookmarks', null)) Storage.set('bookmarks', []);
if (!Storage.get('history', null)) Storage.set('history', []);
if (!Storage.get('progress', null)) Storage.set('progress', {});
if (!Storage.get('chaptersRead', null)) Storage.set('chaptersRead', []);
if (!Storage.get('theme', null)) Storage.set('theme', 'auto');
