/**
 * StappaPlay - Simple Playlist Renderer
 * Author: Fabrizio
 * License: Custom
 */

class StappaPlayPlaylist {
    /**
     * Creates a simple playlist as an HTML list inside the target container.
     * @param {string} containerId - The ID of the container element.
     * @param {Array<{ title: string, url: string }>} tracks - Array of track objects.
     */
    static render(containerId, tracks) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`[StappaPlay] Container with ID '${containerId}' not found.`);
            return;
        }

        if (!Array.isArray(tracks) || tracks.length === 0) {
            console.warn('[StappaPlay] No tracks provided.');
            return;
        }

        const list = document.createElement('ul');
        list.style.listStyle = 'none';
        list.style.padding = '0';

        tracks.forEach(track => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = track.url;
            link.textContent = track.title;
            link.target = '_blank';
            item.appendChild(link);
            list.appendChild(item);
        });

        container.appendChild(list);
        console.log('[StappaPlay] Playlist rendered.');
    }
}

// Example usage:
// const tracks = [
//     { title: 'Sample Track 1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
//     { title: 'Sample Track 2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
// ];
// StappaPlayPlaylist.render('playlist-container', tracks);

module.exports = StappaPlayPlaylist;
