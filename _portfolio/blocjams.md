---
layout: post
title: Bloc Jams
thumbnail-path: "img/blocjams.png"
short-description: The goal of the project was to build a basic digital music player like Spotify that is responsive.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.png)

## Explanation

This site is meant to be basic with only one album being used to demonstrate the display and functionality capabilities. I was asked to utilize Buzz music library for playing audio files, managing playback and volume. jQuery was used where it made sense to refactor the original JavaScript code.

## Problem

Build a three page site with the following functionality.

**Home page**
* Animated selling-points upon scrolling.
   
**Collection page**
* Display the album cover, name and number of songs (fix) in the users collection.

**Album page**
* View the details of a single album including a list of songs and their durations.
* Play and pause a song from a song row.
   * Mousing over the song row changes the song number to a clickable play button.
    * When the play button is clicked, it changes to a pause button and starts playing the song. Even when the mouseleaves the row this will persist.
    * When the pause button is clicked, it changes to a play button and pauses the song.
    * When a new song is selected the song number of the previously playing/paused song changes back to a song number.
    * When the user hovers over each of the songs that aren't playing, the play button should still appear.
* Use a music player overlay that allows the user to:
    * Play and pause the active song.
    * Skip to the next song or go back to the previous
    * See the songs name, duration and playback progress
    * Use the progress bar to skip ahead in the song
    * Use the volume bar to control the volume. 


## Solution

**Home page**
  * Animated selling-points upon scrolling- Used jQuery to animate and event listener/handler for the scroll.

**Collection page**
  * Display the album cover, name and number of songs (fix) in the user’s collection- Started by building out display for one instance then moved to using a dynamic JavaScript template and looped twelve times to show how it would appear.

**Album page**
  * View the details of a single album including a list of songs and their durations- Pulled album cover and info in and built a table for song display. The song rows generate using a dynamic Javascript template.
  * Play and pause a song from a song row- Added event tracking for mouse location, saved the song number of playing song, added javascript functions to update html based on user actions and playing status of songs.
  * Use a music player overlay
    * Built html and used jQuery for templates
    * Store the current album and song data as well as index number so know next/previous, to allow to update player bar.
    * Used the Buzz music library for playing audio files, managing playback and volume.


## Results
All user requirements were met. I tested my solutions by.
* Using chrome inspector to test responsiveness
* Reviewing album covers displayed on the collection page
* Mousing over each row on the album page to test for play button display, then playing one and doing this again.
* Pausing a playing song
* Choosing a new song after a song was playing and paused.
* Playing/pausing a song from the music player.
* Skipping forward and backward from a current song. Inclusiding the first and last songs.
* Playing a song and seeing if it tracks the playback and using the bar to skip forward and backward in the song, listening to ensure reflected.
* Using the volume bar to adjust the volume up and down, listening to see that it is reflected.

## Conclusion
* Event bubbling is key in keeping code minimized
* jQuery is useful in simplifying more complex vanilla Javascript.
* Buzz library is a useful tool for audio playback control.
