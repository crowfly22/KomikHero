// ========== ENHANCED CANVAS ART GENERATOR ==========
const ArtGen = {
    // Seeded random for deterministic generation
    seedRand(seed) {
        let s = typeof seed === 'string' ? seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0) : seed;
        return function() {
            s = (s * 16807 + 0) % 2147483647;
            return (s - 1) / 2147483646;
        };
    },

    // Generate IMPRESSIVE cover art
    cover(canvas, series) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width = 450;
        const h = canvas.height = 600;
        const colors = series.colors;
        const rand = this.seedRand(series.id);

        // Rich background gradient
        const grad = ctx.createLinearGradient(0, 0, w * 0.3, h);
        grad.addColorStop(0, colors[0]);
        grad.addColorStop(0.4, colors[1]);
        grad.addColorStop(1, colors[2] || colors[0]);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Atmospheric fog/clouds
        ctx.globalAlpha = 0.12;
        for (let i = 0; i < 5; i++) {
            const cx = rand() * w;
            const cy = rand() * h;
            const rx = 100 + rand() * 200;
            const ry = 60 + rand() * 100;
            const fogGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rx);
            fogGrad.addColorStop(0, 'rgba(255,255,255,0.3)');
            fogGrad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = fogGrad;
            ctx.beginPath();
            ctx.ellipse(cx, cy, rx, ry, rand() * Math.PI, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        // Light rays from top
        ctx.globalAlpha = 0.08;
        for (let i = 0; i < 4; i++) {
            const x = w * 0.2 + rand() * w * 0.6;
            ctx.save();
            ctx.translate(x, 0);
            ctx.rotate((rand() - 0.5) * 0.3);
            const rayGrad = ctx.createLinearGradient(0, 0, 0, h);
            rayGrad.addColorStop(0, 'rgba(255,255,255,0.5)');
            rayGrad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = rayGrad;
            ctx.fillRect(-30, 0, 60, h);
            ctx.restore();
        }
        ctx.globalAlpha = 1;

        // Genre-specific character silhouette
        this.drawCharacterSilhouette(ctx, w, h, series.genres, rand, colors);

        // Particle effects
        ctx.globalAlpha = 0.6;
        for (let i = 0; i < 30; i++) {
            const px = rand() * w;
            const py = rand() * h;
            const pr = 1 + rand() * 3;
            const pa = 0.2 + rand() * 0.5;
            ctx.fillStyle = `rgba(255,255,255,${pa})`;
            ctx.beginPath();
            ctx.arc(px, py, pr, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        // Bottom gradient overlay for text readability
        const bottomGrad = ctx.createLinearGradient(0, h * 0.5, 0, h);
        bottomGrad.addColorStop(0, 'rgba(0,0,0,0)');
        bottomGrad.addColorStop(0.5, 'rgba(0,0,0,0.3)');
        bottomGrad.addColorStop(1, 'rgba(0,0,0,0.8)');
        ctx.fillStyle = bottomGrad;
        ctx.fillRect(0, 0, w, h);

        // Title with glow effect
        ctx.textAlign = 'center';
        ctx.font = 'bold 38px Nunito, sans-serif';
        const titleLines = this.wrapText(series.title, w - 60, 'bold 38px Nunito, sans-serif');
        const titleY = h * 0.62;

        // Title glow
        ctx.shadowColor = colors[2] || '#fff';
        ctx.shadowBlur = 20;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        titleLines.forEach((line, i) => {
            ctx.fillText(line, w / 2 + 2, titleY + i * 46 + 2);
        });
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#fff';
        titleLines.forEach((line, i) => {
            ctx.fillText(line, w / 2, titleY + i * 46);
        });

        // Author
        ctx.font = '500 15px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText('by ' + series.author, w / 2, titleY + titleLines.length * 46 + 16);

        // Genre tags
        ctx.font = '600 11px Inter, sans-serif';
        const tagY = h - 35;
        series.genres.forEach((g, i) => {
            const tw = ctx.measureText(g).width + 18;
            const tx = w / 2 - (series.genres.length * (tw + 6)) / 2 + i * (tw + 6);
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.beginPath();
            ctx.roundRect(tx, tagY - 11, tw, 22, 11);
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.textAlign = 'center';
            ctx.fillText(g, tx + tw / 2, tagY + 4);
        });

        // Status badge
        if (series.status) {
            const badgeText = series.status;
            ctx.font = 'bold 11px Inter, sans-serif';
            const bw = ctx.measureText(badgeText).width + 16;
            ctx.fillStyle = series.status === 'Completed' ? 'rgba(46,204,113,0.9)' : 'rgba(231,76,60,0.9)';
            ctx.beginPath();
            ctx.roundRect(16, 16, bw, 24, 12);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'left';
            ctx.fillText(badgeText, 24, 33);
        }

        return canvas;
    },

    // Draw genre-specific character silhouettes
    drawCharacterSilhouette(ctx, w, h, genres, rand, colors) {
        const genre = genres[0];
        ctx.globalAlpha = 0.25;
        
        switch(genre) {
            case 'Action':
            case 'Fantasy':
                // Warrior figure
                ctx.fillStyle = 'rgba(255,255,255,0.3)';
                // Body
                ctx.beginPath();
                ctx.moveTo(w * 0.5, h * 0.2);
                ctx.lineTo(w * 0.35, h * 0.55);
                ctx.lineTo(w * 0.4, h * 0.55);
                ctx.lineTo(w * 0.45, h * 0.35);
                ctx.lineTo(w * 0.55, h * 0.35);
                ctx.lineTo(w * 0.6, h * 0.55);
                ctx.lineTo(w * 0.65, h * 0.55);
                ctx.closePath();
                ctx.fill();
                // Head
                ctx.beginPath();
                ctx.arc(w * 0.5, h * 0.17, 22, 0, Math.PI * 2);
                ctx.fill();
                // Sword
                ctx.strokeStyle = 'rgba(255,255,255,0.4)';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(w * 0.65, h * 0.25);
                ctx.lineTo(w * 0.72, h * 0.5);
                ctx.stroke();
                // Energy glow
                const eGrad = ctx.createRadialGradient(w * 0.5, h * 0.35, 0, w * 0.5, h * 0.35, 80);
                eGrad.addColorStop(0, colors[2] + '40');
                eGrad.addColorStop(1, 'transparent');
                ctx.fillStyle = eGrad;
                ctx.fillRect(w * 0.2, h * 0.1, w * 0.6, h * 0.5);
                break;

            case 'Romance':
                // Two figures facing each other
                ctx.fillStyle = 'rgba(255,255,255,0.25)';
                // Figure 1
                ctx.beginPath();
                ctx.arc(w * 0.35, h * 0.25, 18, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(w * 0.35, h * 0.29);
                ctx.lineTo(w * 0.28, h * 0.5);
                ctx.lineTo(w * 0.42, h * 0.5);
                ctx.closePath();
                ctx.fill();
                // Figure 2
                ctx.beginPath();
                ctx.arc(w * 0.65, h * 0.25, 18, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(w * 0.65, h * 0.29);
                ctx.lineTo(w * 0.58, h * 0.5);
                ctx.lineTo(w * 0.72, h * 0.5);
                ctx.closePath();
                ctx.fill();
                // Heart between them
                ctx.fillStyle = colors[2] + '50';
                ctx.font = 'bold 40px serif';
                ctx.textAlign = 'center';
                ctx.fillText('♥', w * 0.5, h * 0.38);
                break;

            case 'Sci-Fi':
                // Cyberpunk cityscape
                ctx.fillStyle = 'rgba(255,255,255,0.2)';
                for (let i = 0; i < 8; i++) {
                    const bw = 20 + rand() * 40;
                    const bh = 80 + rand() * 200;
                    const bx = w * 0.1 + (i / 8) * w * 0.8;
                    ctx.fillRect(bx, h * 0.5 - bh, bw, bh);
                }
                // Neon lines
                ctx.strokeStyle = colors[1] + '60';
                ctx.lineWidth = 2;
                for (let i = 0; i < 5; i++) {
                    ctx.beginPath();
                    ctx.moveTo(rand() * w, h * 0.2);
                    ctx.lineTo(rand() * w, h * 0.5);
                    ctx.stroke();
                }
                break;

            case 'Horror':
                // Creepy eyes
                ctx.fillStyle = 'rgba(255,0,0,0.4)';
                ctx.beginPath();
                ctx.arc(w * 0.38, h * 0.28, 8, 0, Math.PI * 2);
                ctx.arc(w * 0.62, h * 0.28, 8, 0, Math.PI * 2);
                ctx.fill();
                // Dark figure
                ctx.fillStyle = 'rgba(0,0,0,0.4)';
                ctx.beginPath();
                ctx.arc(w * 0.5, h * 0.22, 30, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(w * 0.3, h * 0.3);
                ctx.quadraticCurveTo(w * 0.5, h * 0.25, w * 0.7, h * 0.3);
                ctx.lineTo(w * 0.65, h * 0.55);
                ctx.lineTo(w * 0.35, h * 0.55);
                ctx.closePath();
                ctx.fill();
                break;

            case 'Comedy':
            case 'Slice of Life':
                // Fun shapes and stars
                for (let i = 0; i < 6; i++) {
                    const sx = w * 0.2 + rand() * w * 0.6;
                    const sy = h * 0.15 + rand() * h * 0.35;
                    ctx.fillStyle = `rgba(255,255,255,${0.15 + rand() * 0.2})`;
                    ctx.font = `${20 + rand() * 20}px serif`;
                    ctx.textAlign = 'center';
                    const symbols = ['★', '♪', '✿', '◆', '●', '▲'];
                    ctx.fillText(symbols[i % symbols.length], sx, sy);
                }
                break;

            default:
                // Abstract geometric
                for (let i = 0; i < 5; i++) {
                    const cx = w * 0.2 + rand() * w * 0.6;
                    const cy = h * 0.15 + rand() * h * 0.35;
                    const cr = 20 + rand() * 40;
                    ctx.strokeStyle = `rgba(255,255,255,${0.1 + rand() * 0.2})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
                    ctx.stroke();
                }
        }
        ctx.globalAlpha = 1;
    },

    // Generate COMIC PANEL page with speech bubbles and narration
    comicPage(canvas, seriesId, pageNum, pageData) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width = 800;
        const h = canvas.height = 1200;
        
        const series = SERIES_DATA.find(s => s.id === seriesId);
        const colors = series ? series.colors : ['#1a1a2e', '#16213e', '#e94560'];
        const rand = this.seedRand(seriesId + pageNum);

        // Background
        const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
        bgGrad.addColorStop(0, colors[0]);
        bgGrad.addColorStop(0.5, colors[1]);
        bgGrad.addColorStop(1, colors[2] || colors[0]);
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        // Scene atmosphere
        this.drawSceneBackground(ctx, w, h, rand, colors, pageData.scene);

        // Draw panels
        const panels = pageData.panels || [];
        const panelHeight = Math.min(280, (h - 60) / panels.length - 10);
        let yOffset = 30;

        panels.forEach((panel, i) => {
            const panelY = yOffset;
            const panelH = panel.type === 'wide' ? panelHeight * 1.3 : panelHeight;
            const panelX = 40;
            const panelW = w - 80;

            // Panel background
            ctx.fillStyle = 'rgba(0,0,0,0.4)';
            ctx.beginPath();
            ctx.roundRect(panelX, panelY, panelW, panelH, 8);
            ctx.fill();

            // Panel border
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Scene elements inside panel
            this.drawPanelScene(ctx, panelX, panelY, panelW, panelH, rand, colors, panel.scene, seriesId);

            // Character figures
            if (panel.characters) {
                panel.characters.forEach(ch => {
                    this.drawCharacterFigure(ctx, panelX + ch.x * panelW, panelY + ch.y * panelH, ch, rand);
                });
            }

            // Speech bubbles
            if (panel.dialogue) {
                panel.dialogue.forEach(d => {
                    this.drawSpeechBubble(ctx, panelX + d.x * panelW, panelY + d.y * panelH, d.text, d.type || 'speech');
                });
            }

            // Narration box
            if (panel.narration) {
                this.drawNarrationBox(ctx, panelX + 10, panelY + 10, panelW - 20, panel.narration);
            }

            yOffset += panelH + 12;
        });

        // Page number
        ctx.font = '500 13px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.textAlign = 'center';
        ctx.fillText(`— ${pageNum} —`, w / 2, h - 20);

        return canvas;
    },

    // Draw scene background based on scene type
    drawSceneBackground(ctx, w, h, rand, colors, scene) {
        ctx.globalAlpha = 0.15;
        switch(scene) {
            case 'city':
                for (let i = 0; i < 10; i++) {
                    const bw = 30 + rand() * 60;
                    const bh = 100 + rand() * 300;
                    ctx.fillStyle = `rgba(255,255,255,${0.05 + rand() * 0.1})`;
                    ctx.fillRect(rand() * w, h - bh, bw, bh);
                }
                break;
            case 'forest':
                for (let i = 0; i < 8; i++) {
                    const tx = rand() * w;
                    const th = 80 + rand() * 150;
                    ctx.fillStyle = `rgba(50,205,50,${0.1 + rand() * 0.15})`;
                    ctx.beginPath();
                    ctx.moveTo(tx, h - th);
                    ctx.lineTo(tx - 25, h);
                    ctx.lineTo(tx + 25, h);
                    ctx.closePath();
                    ctx.fill();
                }
                break;
            case 'dungeon':
                ctx.fillStyle = 'rgba(0,0,0,0.3)';
                ctx.fillRect(0, 0, w, h);
                for (let i = 0; i < 5; i++) {
                    const torchX = rand() * w;
                    const torchY = rand() * h;
                    const tGrad = ctx.createRadialGradient(torchX, torchY, 0, torchX, torchY, 60);
                    tGrad.addColorStop(0, 'rgba(255,150,50,0.3)');
                    tGrad.addColorStop(1, 'transparent');
                    ctx.fillStyle = tGrad;
                    ctx.fillRect(torchX - 60, torchY - 60, 120, 120);
                }
                break;
            case 'space':
                for (let i = 0; i < 20; i++) {
                    ctx.fillStyle = `rgba(255,255,255,${0.3 + rand() * 0.5})`;
                    ctx.beginPath();
                    ctx.arc(rand() * w, rand() * h, 1 + rand() * 2, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;
            case 'school':
                // Simple classroom lines
                ctx.strokeStyle = 'rgba(255,255,255,0.1)';
                ctx.lineWidth = 1;
                for (let i = 0; i < 3; i++) {
                    ctx.beginPath();
                    ctx.moveTo(0, h * 0.3 + i * 100);
                    ctx.lineTo(w, h * 0.3 + i * 100);
                    ctx.stroke();
                }
                break;
            case 'indoor':
                ctx.fillStyle = 'rgba(255,255,255,0.05)';
                ctx.fillRect(w * 0.1, h * 0.1, w * 0.8, h * 0.8);
                break;
            default:
                for (let i = 0; i < 6; i++) {
                    ctx.fillStyle = `rgba(255,255,255,${0.03 + rand() * 0.08})`;
                    ctx.beginPath();
                    ctx.arc(rand() * w, rand() * h, 30 + rand() * 80, 0, Math.PI * 2);
                    ctx.fill();
                }
        }
        ctx.globalAlpha = 1;
    },

    // Draw elements inside a panel
    drawPanelScene(ctx, px, py, pw, ph, rand, colors, scene, seriesId) {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(px, py, pw, ph, 8);
        ctx.clip();

        ctx.globalAlpha = 0.3;
        switch(scene) {
            case 'fight':
                // Impact lines
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                for (let i = 0; i < 6; i++) {
                    const cx = px + pw * 0.5;
                    const cy = py + ph * 0.5;
                    const angle = rand() * Math.PI * 2;
                    const len = 30 + rand() * 50;
                    ctx.beginPath();
                    ctx.moveTo(cx + Math.cos(angle) * 20, cy + Math.sin(angle) * 20);
                    ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
                    ctx.stroke();
                }
                break;
            case 'magic':
                // Glowing particles
                for (let i = 0; i < 8; i++) {
                    const gx = px + rand() * pw;
                    const gy = py + rand() * ph;
                    const gGrad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 15);
                    gGrad.addColorStop(0, colors[2] + '80');
                    gGrad.addColorStop(1, 'transparent');
                    ctx.fillStyle = gGrad;
                    ctx.fillRect(gx - 15, gy - 15, 30, 30);
                }
                break;
            case 'rain':
                ctx.strokeStyle = 'rgba(100,150,255,0.4)';
                ctx.lineWidth = 1;
                for (let i = 0; i < 15; i++) {
                    const rx = px + rand() * pw;
                    const ry = py + rand() * ph;
                    ctx.beginPath();
                    ctx.moveTo(rx, ry);
                    ctx.lineTo(rx - 3, ry + 15);
                    ctx.stroke();
                }
                break;
            case 'night':
                // Moon
                ctx.fillStyle = 'rgba(255,255,200,0.3)';
                ctx.beginPath();
                ctx.arc(px + pw * 0.8, py + ph * 0.2, 20, 0, Math.PI * 2);
                ctx.fill();
                // Stars
                for (let i = 0; i < 5; i++) {
                    ctx.fillStyle = 'rgba(255,255,255,0.5)';
                    ctx.beginPath();
                    ctx.arc(px + rand() * pw, py + rand() * ph * 0.4, 2, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;
        }
        ctx.globalAlpha = 1;
        ctx.restore();
    },

    // Draw simple character figure
    drawCharacterFigure(ctx, x, y, ch, rand) {
        const scale = ch.scale || 1;
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        // Body color based on character
        const bodyColor = ch.color || 'rgba(255,255,255,0.5)';
        
        // Head
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.arc(0, -25, 12, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.beginPath();
        ctx.moveTo(0, -13);
        ctx.lineTo(-15, 20);
        ctx.lineTo(15, 20);
        ctx.closePath();
        ctx.fill();

        // Expression (simple)
        if (ch.expression === 'happy') {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, -25, 5, 0.1 * Math.PI, 0.9 * Math.PI);
            ctx.stroke();
        } else if (ch.expression === 'angry') {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(-5, -28);
            ctx.lineTo(-2, -26);
            ctx.moveTo(5, -28);
            ctx.lineTo(2, -26);
            ctx.stroke();
        } else {
            // Neutral dots for eyes
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(-4, -26, 1.5, 0, Math.PI * 2);
            ctx.arc(4, -26, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    },

    // Draw speech bubble
    drawSpeechBubble(ctx, x, y, text, type) {
        ctx.save();
        ctx.font = '14px Nunito, sans-serif';
        
        const lines = this.wrapText(text, 180, '14px Nunito, sans-serif');
        const lineHeight = 18;
        const padding = 12;
        const bubbleW = Math.min(200, Math.max(...lines.map(l => ctx.measureText(l).width)) + padding * 2);
        const bubbleH = lines.length * lineHeight + padding * 2;
        const bx = x - bubbleW / 2;
        const by = y - bubbleH;

        if (type === 'thought') {
            // Cloud bubble
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.beginPath();
            ctx.ellipse(x, by + bubbleH / 2, bubbleW / 2, bubbleH / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            // Thought dots
            ctx.beginPath();
            ctx.arc(x - 8, by + bubbleH + 8, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x - 3, by + bubbleH + 16, 2.5, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Regular speech bubble
            ctx.fillStyle = 'rgba(255,255,255,0.92)';
            ctx.beginPath();
            ctx.roundRect(bx, by, bubbleW, bubbleH, 12);
            ctx.fill();
            ctx.strokeStyle = 'rgba(0,0,0,0.15)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            // Tail
            ctx.fillStyle = 'rgba(255,255,255,0.92)';
            ctx.beginPath();
            ctx.moveTo(x - 6, by + bubbleH);
            ctx.lineTo(x + 6, by + bubbleH);
            ctx.lineTo(x, by + bubbleH + 10);
            ctx.closePath();
            ctx.fill();
        }

        // Text
        ctx.fillStyle = '#1a1a2e';
        ctx.textAlign = 'center';
        ctx.font = '14px Nunito, sans-serif';
        lines.forEach((line, i) => {
            ctx.fillText(line, x, by + padding + 12 + i * lineHeight);
        });

        ctx.restore();
    },

    // Draw narration box
    drawNarrationBox(ctx, x, y, maxW, text) {
        ctx.save();
        ctx.font = 'italic 13px Inter, sans-serif';
        const lines = this.wrapText(text, maxW - 24, 'italic 13px Inter, sans-serif');
        const lineHeight = 18;
        const padding = 10;
        const boxW = maxW;
        const boxH = lines.length * lineHeight + padding * 2;

        // Box
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.beginPath();
        ctx.roundRect(x, y, boxW, boxH, 6);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Text
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.textAlign = 'left';
        lines.forEach((line, i) => {
            ctx.fillText(line, x + padding, y + padding + 12 + i * lineHeight);
        });

        ctx.restore();
    },

    // Thumbnail cover
    thumb(canvas, series) {
        canvas.width = 150;
        canvas.height = 200;
        return this.cover(canvas, series);
    },

    wrapText(text, maxWidth, font) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = font;
        const words = text.split(' ');
        const lines = [];
        let current = '';
        for (const word of words) {
            const test = current ? current + ' ' + word : word;
            if (ctx.measureText(test).width > maxWidth && current) {
                lines.push(current);
                current = word;
            } else {
                current = test;
            }
        }
        if (current) lines.push(current);
        return lines;
    }
};
