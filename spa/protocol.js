/**
 * DATA MODEL
 * ----------
 * Extend protocolData with more sections/items to cover the full PDF.
 * Any item can have:
 *   image: { src, alt, caption }
 */

// Toggle layout of meta pills:
// false = multiple pills per row, wrapping as needed
// true  = one pill per line (stacked vertically)
// ---------------- PASSWORD PROTECTION ----------------

// ---------------- PASSWORD PROTECTION ----------------

// Change this to whatever password you want.
const APP_PASSWORD = "asd";  // <<< set your own password here

function unlockApp() {
  const overlay = document.getElementById("passwordOverlay");
  const appShell = document.getElementById("appShell");
  if (!overlay || !appShell) return;

  overlay.classList.add("hidden");

  // Show the app shell (was display:none in CSS)
  appShell.style.display = "flex";     // .app-shell is a flex container
  appShell.removeAttribute("aria-hidden");

  sessionStorage.setItem("protocolUnlocked", "1");
}

function setupPasswordGate() {
  const overlay = document.getElementById("passwordOverlay");
  const appShell = document.getElementById("appShell");
  const form = document.getElementById("passwordForm");
  const input = document.getElementById("passwordInput");
  const errorEl = document.getElementById("passwordError");

  if (!overlay || !appShell || !form || !input) return;

  // If already unlocked this session, skip prompt
  if (sessionStorage.getItem("protocolUnlocked") === "1") {
    unlockApp();
    return;
  }

  // Make sure app is hidden until unlocked
  appShell.setAttribute("aria-hidden", "true");
  overlay.classList.remove("hidden");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();

    if (!value) {
      errorEl.textContent = "Please enter a password.";
      return;
    }

    if (value === APP_PASSWORD) {
      errorEl.textContent = "";
      unlockApp();
    } else {
      errorEl.textContent = "Incorrect password. Please try again.";
      input.value = "";
      input.focus();
    }
  });

  // Press Enter on the input also submits
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      form.requestSubmit();
    }
  });
}

// Run password setup once DOM is ready
document.addEventListener("DOMContentLoaded", setupPasswordGate);

// ---------------- END PASSWORD PROTECTION ----------------

const protocolData = [
  {
  id: "part-a-preparation",
  title: "Part A: Preparation",
  subtitle: "Clip grids, verify microscope & camera health, dock cassette, and start SerialEM.",
  items: [
    // 1. Clip grids
    {
      id: "prep-clip-grids",
      text: "1. Clip grids following in-person training. Do not reuse C-clips or C-clip rings; inspect that the grid is seated and clipped correctly (as in Fig. 1C).",
      important: false,
      meta: "Improper clipping can damage the grid or cause loading failures. Never reuse C-clips or C-clip rings.",
      image: {
        src: "images/fig1-grid-clipping.png",
        alt: "Example of EM grid clipping and loading into an autoloader cassette",
        caption: "Fig. 1 – EM grid clipping and cartridge loading; use this as a visual check for proper clipping."
      },
      children: [
        {
          id: "prep-clip-cleanliness",
          text: "1.1. Before clipping, confirm all parts (tweezers, C-clips, cartridges) are clean and free of fibers or debris.",
          important: false
        },
        {
          id: "prep-clip-orientation",
          text: "1.2. Double-check grid orientation, during clipping, face the carbon side toward the C-clip ring, and the C clip ring is facing left in the casette, facing casette slot #1.",
          important: true
        },
		{
          id: "inserting-grids-vertically",
          text: "1.3. Make sure Grid catridge are vertically inserted, and are fully pushed to the bottom of the slot.",
          important: true
        }
      ]
    },

    // 2. Check the system
    {
      id: "prep-check-system",
      text: "2. Check microscope and camera status before starting any SerialEM work.",
      important: false,
      children: [
        {
          id: "prep-ln2-level",
          text: "2.1. Confirm that liquid nitrogen (LN₂) levels are sufficient for your planned experiment time.",
          important: false,
        },
        {
          id: "2-2",
          text: "2.2. @TEM PC:",
          important: false,
			children:[
				{
				  id: "prep-tempc-ui",
				  text: "2.2.1. @TEM PC: Ensure TEM UI, FluCam and SerialEM server (FEI-SEMserver) are running",
				  important: false,
				},
				  {
				  id: "prep-vacuum",
				  text: "2.2.2. Verify vacuum and high tension are normal (all Green).",
				  important: false,
				  meta: [
					  "@Vacuum OCX are normal: Gun = 1, Column = 1, Autoloader < 43;",
					  "@Status window: HT shows 200 kV;",
					  "Column and autoloader temperatures below −170 °C."
				  ],
				 metaStacked: true
				},
				{
				  id: "prep-tempc-k3-shutter",
				  text: "2.2.3. Check the K3 shutter icon (Standalone Camera) in TEM UI is yellow. If not, click it to enable the K3.",
				  important: true,
				  meta: "Always re-check after any TEM UI restart.",
				  image: {
					src: "images/fig2-k3-shutter.png",
					alt: "Standalone Camera shutter icon in yellow on the TEM UI",
					caption: "Fig. 2 – K3 Standalone Camera shutter icon; must be in the yellow “on” state."
				  }
				},
			]
        },
        {
          id: "2-3",
          text: "2.3. @K3 PC:",
          important: false,
		  children: [
			{
			  id: "prep-k3pc-dm-open",
			  text: "2.3.1. @K3 PC: Open DigitalMicrograph (DM) and confirm the K3 is cooled to about −20 °C.",
			  important: false,
			  image: {
				src: "images/fig3-k3-temp.png",
				alt: "K3 camera monitor showing temperature at −20 °C",
				caption: "Fig. 3 – Camera monitor in DM; K3 temperature and health status should both be normal."
			  }
			},
			{
			  id: "prep-k3pc-system-health",
			  text: "2.3.2. Click the setting icon (Fig. 3, red box), then click the Quick Scan in the popup K3 Setup window. All lights in the newly pop-up System Health window must be green.",
			  important: true,
			  image: {
				src: "images/fig3-k3-temp.png",
				alt: "K3 camera monitor showing temperature at −20 °C",
				caption: "Fig. 3 – Camera monitor in DM; K3 temperature and health status should both be normal."
			  }
			}
		  ]
        },
      ]
    },

    // 3. Dock cassette
    {
      id: "prep-dock-cassette",
      text: "3. Dock a cassette with your grids into the Autoloader.",
      important: false,
      children: [
        {
          id: "prep-dock-empty-clean-cassette",
          text: "3.1. Get a dry cassette and ensure that it is empty and clean (e.g., no dropped c-clip or fiber).",
          important: false
        },
        {
          id: "prep-dock-cool-loading-station",
          text: "3.2.Assemble and cool the loading station with fresh LN₂.",
          important: false
        },
        {
          id: "prep-dock-load-cartridges",
          text: "3.3. Properly load your grid cartridges into the cassette. ",
          important: true, 
	      meta: [
			  "For docking <12 grids, keep slot #1 vacant for potential YCR grid retention (for EM alignments).",
			  "For docking 12 grids, confirm that the stage is empty. If a Cross-grating grid is present, undock and store it in LN2 (remember to redock it after your session); If it’s a used sample grid, discard it."
		  ],
		 metaStacked: true
        },
        {
          id: "prep-dock-nanocab-test-pin",
          text: "3.4. Transfer the cassette to a NanoCab and test that the NanoCab pin moves freely (not frozen) before docking.",
          important: true
        },
        {
          id: "prep-dock-insert-nanocap",
          text: "3.5. Insert the NanoCab into the Glacios sample exchange port with the cold-warning icon facing you. The Dock icon on the Glacios screen should turn green.",
          important: true
        },
		  {
          id: "prep-dock-dock-on-glacios",
          text: "3.6. Press the Dock icon. Wait until the status displays: Nanocab can be removed. Then, remove the NanoCab.",
          important: true
        },
		  
        {
          id: "prep-dock-dry-tools",
          text: "3.7. Dry the loading station and NanoCab (in the YSB dehydrator; reset the timer).",
		  meta: [
			  "Press the central button 3 times until the fan logo is spinning and there is a countdown",
		  ],
          important: false
        },
        {
          id: "prep-dock-edit-slot-state",
          text: "3.8. In TEM UI > Autoloader OCX > Edit Slot State, click each slot to edit its status (blue, occupied by a grid; gray, no grid; light gray, unknown), and then click Edit Slot State again to inactivate it.",
          important: false
        }
      ]
    },

    // 4. Inventory and temperature recovery
    {
      id: "prep-inventory-and-temperature",
      text: "4. Wait for all temperatures to recover below −170 °C.",
      important: true,
      children: [
        {
          id: "prep-inventory-run",
          text: "click TEM UI>Autoloader OCX>Options tab>Inventory. If the edits in step 3(8) match the slot status, a “√” will appear. If not, a red message will display.",
          important: true
        },
        {
          id: "prep-inventory-stop",
          text: "Stop the inventory once the last grid has been checked.",
          important: false
        }
      ]
    },

    // 5. Reset objective lens
    {
      id: "prep-reset-objective-lens",
      text: "5. Reset the objective lens.",
      important: true,
      meta: "SerialEM must be closed during this step.",
      children: [
        {
          id: "prep-reset-eucentric-focus",
          text: "5.1. At a SA magnification, press the Eucentric Focus button on the right-hand panel.",
          important: false
        },
        {
          id: "prep-reset-defocus",
          text: "5.2. Reset defocus (press R2 at YSB).",
          important: false
        },
        {
          id: "prep-reset-probe-modes",
          text: "5.3. Switch the prob mode (e.g., at YSB, press L1 button at the left-hand panel).",
          important: false
        },
		{
          id: "prep-reset-repeat",
          text: "5.4. Repeat the steps (1-2).",
          important: false
        }
      ]
    },

    // 6. Start SerialEM
    {
      id: "prep-start-serialem",
      text: "6. Start SerialEM. ",
      important: false,
      children: [
        {
          id: "prep-start-serialem-launch",
          text: "6.1. Double-click your labs’ SerialEM shortcut @K3 PC desktop. ",
          important: false
        },
        {
          id: "prep-start-serialem-settings",
          text: "6.2. Click SerialEM>Setting> Open. Then select a setting file.",
		  meta: "e.g., SerialEMsettings-SPA-45K_Date.txt.",
          important: false
        }
      ]
    },

    // 7. Check Low Dose mode
    {
      id: "prep-check-low-dose-mode",
      text: "7. Check SerialEM>Low Dose Control tab>Low Dose Mode (Fig. 4). ",
      important: true,
	  image: {
            src: "images/fig4-low-dose-control.png",
            alt: "SerialEM Low Dose Control panel",
            caption: "Fig. 4 – Example Low Dose Control layout for SPA work; use it as a reference for your own settings."
      },
    }
  ]
},
	
	
	
	
{
  id: "part-b-sample-screening",
  title: "Part B: Sample screening",
  subtitle: "Acquire LMMs, set up beams and references, align images, and collect high-mag screening images.",
  items: [
    // Step 8
    {
      id: "screening-8-lmm",
      text: "8. Acquire LMM of the desired grids.",
      important: false,
      children: [
        {
          id: "screening-8-1-turbo-on",
          text: "8.1. In TEM UI > Autoloader OCX > Options, set Turbo Always On.",
          important: false
        },
        {
          id: "screening-8-2-c2-aperture",
          text: "8.2. @TEM UI > Aperture OCX, insert the 150 µm C2 aperture, make sure the Objective aperture is NOT inserted, and open Column valves.",
          important: true
        },
        {
          id: "screening-8-3-search-image",
          text: "8.3. In SerialEM > Camera & Script tab, click “Search” to acquire an image. Check that contrast is sufficient to clearly see ice cracks and grid features.",
		  image: {
            src: "images/fig5.png",
            alt: "Camera & Script tab",
            caption: "Fig. 5 – Camera & Script tab."
          },
          important: false
        },
        {
          id: "screening-8-4-open-navigator",
          text: "8.4. Open a Navigator window via SerialEM > Navigator > Open.",
          important: false
        },
        {
          id: "screening-8-5-setup-full-montage",
          text: "8.5. In SerialEM > Navigator > Montaging & Grids > Setup Full Montage",
			children: [
				{
				  id: "screening-8-5-1-setup-full-montage",
				  text: "8.5.1. Configure the Montage Setup window as Figure 7.",
				  meta: [
					  "Follow sequence 1-3. ",
					  "5X7 is a full map. ",
					  "Reduce the pieces for smaller maps.",
					  "A 4x6 map takes ~8 mins. ",
				  ],
				  metaStacked: false,
				  important: true,
				  image: {
					src: "images/fig7-lmm-montage-setup.png",
					alt: "Example Montage Setup window for LMM acquisition",
					caption: "Fig. 7 – Montage Setup for full-grid LMM."
				  }
				},
				{
				  id: "screening-8-5-2-setup-full-montage",
				  text: "8.5.2. @File Properties window, keep default settings and click OK. REMEMBER TO TAKE A PICTURE",
				  important: false,
				},
				{
				  id: "screening-8-5-3-setup-full-montage",
				  text: "8.5.3. Create a data folder in K3 PC (e.g., X:\YYYYMMDD) and specify a file name (e.g., LMM) for saving LMM data.",
				  important: false,
				},
			]
        },
        {
          id: "screening-8-6-lmmcars-script",
          text: "8.6. Right click the Scripts tool bar>LMMCars (Fig. 6) and edit three locations (highlighted in red): (a) data path; (b) grid slot numbers (in preferred sequence); (c) grid names (separated by space). Then click Run.",
          important: true,
		  meta: [
			  "SetDirectory X:\YYYYMMDD",
			  "cat = { 2 3 ? } #Leave a space before, between, & after the numbers.",
			  "name = { name2 name3 name? }",
			  "Also change the directory for MMM and SPA-Screening at this time",
		  ],
		  metaStacked: true,
          image: {
            src: "images/fig6-lmmcars-script.png",
            alt: "LMMCars script configuration window in SerialEM",
            caption: "Fig. 6 – LMMCars script parameters. You can also set MMM and SPA-screening directories here."
          }
        },
        {
          id: "screening-8-7-save-nav",
          text: "8.7. After completion, click SerialEM>Navigator>Save. Save the navigation file.",
          important: false
        },
        {
          id: "screening-8-8-turbo-auto-off",
          text: "8.8. Check TEM UI>Autoloader OCX>Options tab>Turbo Auto Off (default).",
          important: false
        }
      ]
    },

    // Step 9
    {
      id: "screening-9-define-three-locations",
      text: "9. Define three reference locations (on the last grid that will stay on the stage).",
      important: true,
      meta: "On the last grid that will stay on the stage.",
	  image: {
            src: "images/fig8-lmm-mmm-highmag.png",
            alt: "Example of LMM, MMM and high-magnification image linked by the Feature point",
            caption: "Fig. 8 – Example Feature point linking LMM, MMM, and high-mag image."
          },
      children: [
        {
          id: "screening-9-1-hole-point",
          text: "9.1. Hole: click SerialEM>Navigator window>Add Points, then click a wide empty area on the LMM to add a Point.",
          important: false
        },
        {
          id: "screening-9-2-carbon-point",
          text: "9.2. Carbon: add a Point on a thin and flat carbon area (close to the square center) of an intact square.",
          important: false
        },
        {
          id: "screening-9-3-feature-point",
          text: "9.3. Feature: add a Point on a clearly recognizable feature (a good example was marked by a red arrow in Figure 8), and then click Navigator window>Stop adding.",
          important: false,
        }
      ]
    },

    // Step 10
    {
      id: "screening-10-record-beam",
      text: "10. Determine the Record beam: make decision on spot size and magnification for your Record beam (e.g., Spot size 3 & 45K are used in this manual) to ensure a good dose rate (8-40 e-/unbinpixel/s) for K3 and target pixel size with a parallel beam (Condenser lens values are provided in lab). If you would like to make changes, check the Continuous update @Low Dose Control tab (Fig. 4), make changes, then uncheck the Continuous update..",
      important: false,
    },

    // Step 11
    {
      id: "screening-11-k3-references",
      text: "11. Acquire K3 references. ",
      important: false,
      meta: "Before using the K3, ensure the beam covers the K3 area on FluCam to prevent damage.",
      children: [
        {
          id: "screening-11-1-linear-ref",
          text: "11.1. Linear reference (~4 min).",
          important: false,
		  children: [
			{
			  id: "screening-11-1-1-linear-ref",
			  text: "11.1.1. Go to Hole & ensure 150 µm C2 aperture is used.",
			  important: false
			},
			{
			  id: "screening-11-1-2-linear-ref",
			  text: "11.1.2. Import the Record beam through SerialEM and then change it to Spot size 3, C2 = 35.8%.",
			  important: false
			},
			{
			  id: "screening-11-1-3-linear-ref",
			  text: "11.1.3. @DM, select Linear mode, unblank the beam, take DM View images to verify that the K3 works well.",
			  meta: "This is to make sure that the camera is working fime, for example, there is not a streak of line through the middle.",
			  important: false
			},
			{
			  id: "screening-11-1-4-linear-ref",
			  text: "11.1.4. Click DM>Camera>Prepare Gain Reference. Use default settings. Dial the Intensity knob slowly (@ Fine mode) to get the suggested counts. Then click done.",
			  important: false
			},
		  ]
        },
        {
          id: "screening-11-2-counting-ref",
          text: "11.2. Acquire Counting reference (takes ~5 minutes):",
          important: false, 
		  children: [
			{
			  id: "screening-11-2-1-counting-ref",
			  text: "11.2.1. After 11.1 completion, a window pops-up. Insert 30 μm C2 aperture and FluCam screen, import and center the Record beam, then retract screen. In the pop-up window, set the target dose rate as needed (e.g., 18 e/p/s) and click OK",          
			  meta: [
				  "The beam will tend to drift upwards, so when initially adjusting the beam, it is best if you adjust the beam to be at the lower right of the actual correct position. ",
				  "You will have to click on the expert mode if you want to make change. ",

			  ],
			  metaStacked: true,
			  important: false
			},
			{
			  id: "screening-11-2-2-counting-ref",
			  text: "11.2.2. @DM, after dark reference acquisition, unblank the beam. Then dial the Intensity knob slowly (@ Fine mode) to 18 e/p/s (44.62% on 6/27/25). Then click done.",
			  important: false
			},
			{
			  id: "screening-11-2-3-counting-ref",
			  text: "11.2.3. After completion, acquire a 2s Counted image and verify the reference by this image and its FFT.",
			  meta: [
				  "If you see the fringe or the edge of the beam, you will have to re-do the reference (the entire 11 step). ",
				  "it is better if you re-lower the screen and varify the position of the beam. ",
			  ],
			  metaStacked: true,
			  important: false
			}
		  ],
        },
      ]
    },

    // Step 12
    {
      id: "screening-12-low-dose-setup",
      text: "12. Set up SerialEM Low Dose imaging conditions.",
      important: true,
      meta: "Use a carbon-foil grid for beam alignments if working on Au-foil or lamella grids; YCR settings are a good starting point, but tune as needed.",
      children: [
        {
          id: "screening-12-a-record-alignment",
          text: "12.a. Record condition",
		  meta: [
			  "nP mode",
			  "Spot size 3",
			  "Mag.=45k",
			  "C2=42.37%",
		  ],
		  metaStacked: false,
          important: false,
		  children: [
				{
				  id: "screening-12-a-1-record-alignment",
				  text: "12.a.1. Correct Condenser Astigmatism @Hole",
				  meta: [
					  "It is stable; can be skipped if you are satisfied with the beam",
				  ],
				  important: true,
				  children: [
					{
					  id: "screening-12-a-1-i-record-alignment",
					  text: "12.a.1.i. Click SerialEM>Low Dose Control tab>Rec. icon to import the Record beam. Insert FluCam screen. Condense the beam with Intensity knob and center the beam as needed. Change the mag. to 310K.",
					  important: false
					},
					{
					  id: "screening-12-a-1-ii-record-alignment",
					  text: "12.a.1.ii. Choose TEM UI>Stigmator OCX>Condenser.",
					  important: false
					},
					{
					  id: "screening-12-a-1-iii-record-alignment",
					  text: "12.a.1.iii. Slightly turn the Intensity knob clockwise until beam distortion is visible (if uncorrected).",
					  important: false
					},
					{
					  id: "screening-12-a-1-iv-record-alignment",
					  text: "12.a.1.iv. Make the beam round using the MF-X/Y knobs.",
					  important: false
					},
					{
					  id: "screening-12-a-1-v-record-alignment",
					  text: "12.a.1.v. Repeat iii & iv until the beam stops rotating when adjusting from over/under to under/over crossover with the Intensity knob (Rotation of oval beam indicates the presence of condenser astigmatism).",
					  important: false
					},
					{
					  id: "screening-12-a-1-vi-record-alignment",
					  text: "12.a.1.vi. Click TEM UI>Stigmator OCX>None.",
					  important: false
					},
				  ],
				},
				{
				  id: "screening-12-a-2-record-alignment",
				  text: "12.a.2. Center C2 aperture @Hole: (It is relatively stable and can be skipped if you are satisfied with the beam)",
				  important: true,
				  children: [
						{
						  id: "screening-12-a-2-i-record-alignment",
						  text: "12.a.2.i. Import the saved Record beam through SerialEM. And turn on the red circles of the FluCam.",
						  important: false
						},
						{
						  id: "screening-12-a-2-ii-record-alignment",
						  text: "12.a.2.ii. Click Aperture OCX>Adjust icon of Condenser 2.",
						  important: false
						},
						{
						  id: "screening-12-a-2-iii-record-alignment",
						  text: "12.a.2.iii. Condense the beam to crossover and accurately shift the beam to the center using the track ball.",
						  important: false
						},
						{
						  id: "screening-12-a-2-iv-record-alignment",
						  text: "12.a.2.iv. Spread the beam to the outer red circle on the screen by dialing the Intensity Knob clockwise.",
						  important: false
						},
						{
						  id: "screening-12-a-2-v-record-alignment",
						  text: "12.a.2.v. Use the MF-X/Y knobs to co-center the beam with the outer red circle.",
						  important: false
						},
						{
						  id: "screening-12-a-2-vi-record-alignment",
						  text: "12.a.2.vi. Repeat steps iii-v until getting a satisfactory result.",
						  important: false
						},
						{
						  id: "screening-12-a-2-vii-record-alignment",
						  text: "12.a.2.vii. Click the Adjust again to inactivate it.",
						  important: false
						},
				  ]
				},
				{
				  id: "screening-12-a-3-record-alignment",
				  text: "12.a.3. Tune nP Beam Tilt pp x/y",
				  meta: [
					  "It is stable; can be skipped if you are satisfied with the beam",
				  ],
				  important: true,
				  children: [
						{
						  id: "screening-12-a-3-i-record-alignment",
						  text: "12.a.3.i. Press Eucentric focus button (the Eucentric focus should have been well-tuned, e.g., in YSB Glaicos. If not, go to Carbon, then dial the Focus knob to get the image 0 focus).",
						  important: false
						},
						{
						  id: "screening-12-a-3-ii-record-alignment",
						  text: "12.a.3.ii. Condense the beam.",
						  important: false
						},
						{
						  id: "screening-12-a-3-iii-record-alignment",
						  text: "12.a.3.iii. Click TEM UI>Direct Alignment OCX>nP Beam Tilt pp x.",
						  important: false
						},
						{
						  id: "screening-12-a-3-iv-record-alignment",
						  text: "12.a.3.iv. Completely overlap the two beams by adjusting the MF-X/Y knobs. Then click Done.",
						  important: false
						},
						{
						  id: "screening-12-a-3-v-record-alignment",
						  text: "12.a.3.v. Repeat steps iii and iv for nP Beam Tilt pp y.",
						  important: false
						},
				  ],
				},
				{
				  id: "screening-12-a-4-record-alignment",
				  text: "12.a.4. Coma-free alignment @ Carbon",
				  meta: [
					  "It is stable; can be skipped if you are satisfied with the beam",
				  ],
				  important: true,
				  children: [
						{
						  id: "screening-12-a-4-i-record-alignment",
						  text: "12.a.4.i. Setup sample: retract screen, go to Carbon, then click SerialEM>Tasks>Eucentricity>Rough Eucentricity (if the black beam edge is present in the View image, do Step 12(e)(1) first), and then Update Z of Carbon and LMM in the Navigator window.",
						  important: false
						},
						{
						  id: "screening-12-a-4-ii-record-alignment",
						  text: "12.a.4.ii. Setup imaging parameters: click Camera & Script tab>Setup. In the pop-up Camera Parameters window (Fig. 9): a) set up the parameters of Record as Fig 9 except setting Binning 1 and unchecking Save frames. b) click the Set Up icon. In the newly pop-up window, ensure In SerialEMCCD plugin has been checked and use default settings for the others.",
						  important: false,
						  image: {
							src: "images/fig9.png",
							alt: "Camera & Script tab",
							caption: "Fig. 5 – Camera & Script tab."
						  	},
						},
						{
						  id: "screening-12-a-4-iii-record-alignment",
						  text: "12.a.4.iii. Setup beam: a) click Low Dose Control tab>Rec. Insert screen. Center beam by TEM UI>Direct Alignment OCX>Beam shift and ensure it is on carbon. Then retract screen. b) click Focus/Tune>Set Target and set -2, then click Autofocus @SerialEM>Image alignment & Focus tab.",
						  meta: [
							  "after autofocus, make sure that the defocus reported under Image Alignment and Focus (-2) should be within +-2 of the reported actual defocus under Microscope tab",
						  ],
						  important: false
						},
						{
						  id: "screening-12-a-4-iv-record-alignment",
						  text: "12.a.4.iv. Click SerialEM>Focus/Tune>Correct Astigmatism by CTF to ensure round Thon rings.",
						  important: false
						},
						{
						  id: "screening-12-a-4-v-record-alignment",
						  text: "12.a.4.v. Click SerialEM>Focus/Tune>Coma-free Alignment by CTF.",
						  important: false
						},
						{
						  id: "screening-12-a-4-vi-record-alignment",
						  text: "12.a.4.vi. If the SetBeamTilt is used in your SPA-Acquisition script, ensure updating the beam tilt values.",
						  important: false
						},
						{
						  id: "screening-12-a-4-vii-record-alignment",
						  text: "12.a.4.vii. Run script reportbeamtilt, copy the output value in the log to SPA-Acquisition script ",
						  important: false
						},
				  ],
				},
				{
				  id: "screening-12-a-5-record-alignment",
				  text: "12.a.5. Center Objective aperture",
				  meta: [
					  "Optional; do this step only if you decide to use an Objective aperture",
				  ],
				  important: true
				},
				{
				  id: "screening-12-a-6-record-alignment",
				  text: "12.a.6. Correct Objective Astigmatism: Click SerialEM>Focus/Tune>Correct Astigmatism by CTF. Then, verify the results with a Record image (if see Thon ring cut-off in FFT, get YCR for trouble shooting).",
				  meta: [
					  "This can not be skipped even if not using objective aperture. ",
				  ],
				  important: true
				},
				{
				  id: "screening-12-a-7-record-alignment",
				  text: "12.a.7. Tune beam/image shift: Take a View image, then click SerialEM>Focus/Tune>Calibrate Coma vs Image shift. In the pop-up window, set the measured Distance, e.g., 5.8 µm and 7 µm for 16-holes-pattern (or 3.5 µm and 5.2 µm for 9-holes-pattern) of R1.2/1.3 and R2/1 grids, respectively. And adjust the Rotation to locate the measurement on carbon areas in the View image. Then click Run Calibration. After completion, save the SerialEM setting and log files.",
				  meta: [
					  "After taking the view image, should try to center the stage to the center of the carbon (by right clicking and dragging) this is to make sure that the pattern for Beam shift is also folling on a carbon. ",
					  "Make sure the measurement spot (even if it is actually further then indicated) that pops up is not touching hole or contamination.",
					  "Use the first (5 pattern) is good enough",
				  ],
				  metaStacked: true,
				  important: true
				},
				{
				  id: "screening-12-a-8-record-alignment",
				  text: "12.a.8. Calibrate electron dose: go to the Hole, acquire a Record image, then click SerialEM>Tasks>Calibrate Electron Dose. Click Yes in the pop-up message. Take another Record image to update the readings.",
				  meta: [
					  "to take another image is just to update the reading that can be seen under setup window under camera and scripts, the actual calibration is already done",
				  ],
				  metaStacked: false,
				  important: true
				},
			  
		  ]
		},
        {
          id: "screening-12-b-Preview-alignment",
          text: "12.b. Same as Record, but Binning 4, Exposure time 0.2s",
          important: false
        },
        {
          id: "screening-12-c-Focus-alignment",
          text: "12.c. Binning 4, Half-Square or Full, Exposure time 0.2s",
          important: false
        },
        {
          id: "screening-12-d-Trial-alignment",
          text: "12.d. Optional, set it for Autocenter Beam as needed: e.g., Binning 2, Square, Exposure time 0.1s",
          important: false
        },
        {
          id: "screening-12-e-View-alignment",
          text: "12.e. Optional, set it for Autocenter Beam as needed: e.g., Binning 2, Square, Exposure time 0.1s",
		  meta: [
			  "µP mode",
			  "Spot size 3",
			  "M1250",
			  "C2=73%",
			  "Binning 4",
			  "Full",
			  "Exposure time 0.2/0.3s for good contrast",
		  ],
		  metaStacked: false,
          important: false,
		  children: [
			{
			  id: "screening-12-e-1-Trial-alignment",
			  text: "12.e.1. Co-center the View beam with Record beam",
			  meta: [
				  "Even if the position is good, should still click into beam shift",
			  ],
			  important: true,
			  children: [
					{
					  id: "screening-12-e-1-1-Trial-alignment",
					  text: "12.e.1.1. Center Record beam by TEM UI>Direct Alignment>Beam shift.",
					  important: false
					},
					{
					  id: "screening-12-e-1-2-Trial-alignment",
					  text: "12.e.1.2. Switch to View beam by clicking Vie. @SerialEM>Low Dose Control tab (Fig. 4).",
					  important: false
					},
					{
					  id: "screening-12-e-1-3-Trial-alignment",
					  text: "12.e.1.3. Check the Set under Additional beam shift (and DF tilt) @Low Dose Control tab, center the beam with the track ball on the left-hand panel, then uncheck the Set.",
					  important: false
					},
					{
					  id: "screening-12-e-1-4-Trial-alignment",
					  text: "12.e.1.4. Switch to Record beam and center it again by TEM UI>Direct Alignment>Beam shift.",
					  important: false
					},
					{
					  id: "screening-12-e-1-5-Trial-alignment",
					  text: "12.e.1.5. Done. But repeat step 1-4) for additional iteration(s) if you are not satisfied with the results",
					  important: false
					},
			  ]
			},
			{
			  id: "screening-12-e-2-Trial-alignment",
			  text: "12.e.2. Set the position of Focus beam @ Carbon:",
			  important: true, 
			  children: [
					{
					  id: "screening-12-e-2-1-Trial-alignment",
					  text: "12.e.2.1. Retract the screen, take a View image by clicking the View @Camera & Script tab (Fig. 5) and right-mouse drag the image to center the red crosshair on a hole.",
					  important: false
					},
					{
					  id: "screening-12-e-2-2-Trial-alignment",
					  text: "12.e.2.2. @Low Dose Control tab, check Focus under the Define position of area.",
					  important: false
					},
					{
					  id: "screening-12-e-2-3-Trial-alignment",
					  text: "12.e.2.3. Click a location on carbon for Focus beam and ensure it is out of Record area.",
					  important: false
					},
					{
					  id: "screening-12-e-2-1-Trial-alignment",
					  text: "12.e.2.4. @Low Dose Control tab, check None under the Define position of area.",
					  important: false
					},
			  ]
			},
		  ]
        },
      ]
    },

    // Step 13
    {
      id: "screening-13-align-images",
      text: "13. Align images at the three magnifications used for targeting (Search, View, and Record).",
      important: true,
      meta: "ONLY perform this on the last grid that has NO reloading-induced shift or rotation relative to its LMM",
      children: [
        {
          id: "screening-13-1-align-search-view",
          text: "13.1. Align images at Search (used for LMM; Fig. 8, left) and View (for MMM; Fig.8, middle) magnifications. ",
          important: false,
		  children: [
				{
				  id: "screening-13-1-1-align-search-view",
				  text: "13.1.1. Refine the coordinates of Feature at View magnification:",
				  important: true,
					  children: [
						{
						  id: "screening-13-1-1-a-align-search-view",
						  text: "13.1.1.a. @SerialEM>Navigator window, select the point of Feature, click Go To XY, and then capture a View image. If large objects appear, relocate to a clean area to ensure accurate height adjustment.",
						  important: false
						},
						{
						  id: "screening-13-1-1-b-align-search-view",
						  text: "13.1.1.b. Click SerialEM>Tasks>Eucentricity>Rough Eucentricity, and then Update Z of the Feature in the Navigator window. @LMM, ensure the orange cross of the Feature point is labeled on the feature.",
						  important: false
						},
						{
						  id: "screening-13-1-1-c-align-search-view",
						  text: "13.1.1.c. Insert the Screen, find the Feature, move it inside the green square at the screen such that it will show up in later View image, and then retract the screen.",
						  important: false
						},
					  ]
				},
				{
				  id: "screening-13-1-2-align-search-view",
				  text: "13.1.2. Acquire a View image and click the feature in the image to add a Marker (green crosshair) on it.",
				  important: true
				},
				{
				  id: "screening-13-1-3-align-search-view",
				  text: "13.1.3. Click SerialEM>Navigator>Shift to Marker. A pop-up message will show the amount of shift between Search and View mags. Click Ok or repeat 13 (1) on another feature until getting a satisfactory result.",
				  important: true
				},
		  ]
        },
        {
          id: "screening-13-2-align-search-view",
          text: "13.2. Align images at the magnifications of View (for MMM; Fig. 8, middle) and Record beams (Fig. 8, right):",
          important: true,
		  children: [
				{
				  id: "screening-13-2-1-align-search-view",
				  text: "13.2.1. Center a small feature at Record magnification",
				  meta: [
					  "Acquire a View image, find a small feature, and then center it with the guidance of View images.",
					  "Take a Preview image. If the feature is invisible, insert screen, center feature, & then retract screen.",
					  "Take a Preview image. If the feature is off-centered, precisely center it based on Preview images.",
				  ],
				  metaStacked: true,
				  important: true
				},
				{
				  id: "screening-13-2-2-align-search-view",
				  text: "13.2.2. Uncheck SerialEM>Image Alignment & Focus tab>Move stage for big mouse shifts. Then acquire a View image,",
				  important: true
				},
				{
				  id: "screening-13-2-3-align-search-view",
				  text: "13.2.3. Right-mouse drag the View image to center the feature. Then click Low Dose Control tab>Set (next to the Zero icon). Repeat this step until getting a satisfactory result.",
				  important: true
				},
				{
				  id: "screening-13-2-4-align-search-view",
				  text: "13.2.4. Recheck Move stage for big mouse shifts. Repeat 13 (2) if needed for a satisfactory alignment.",
				  important: true
				},
		  ]
        },
      ]
    },

    // Step 14
    {
      id: "screening-14-calibrate-focus-target",
      text: "14. Calibrate Focus targets for Eucentricity by focus.",
      important: false,
      meta: "optional, do it if Eucentricity by focus gets bad results",
      children: [
        {
          id: "screening-14-1-focus-calibration",
          text: "14.1. Select the Carbon point that has been brought to eucentric height in Step 12(a4), and click Go To XYZ.",
          important: false
        },
        {
          id: "screening-14-2-focus-calibration",
          text: "14.2. Switch to View beam, then click SerialEM>Tasks>Eucentricity>Calibrate Focus Targets.",
		  meta: "The last icon in the dropdown",
          important: false
        },
        {
          id: "screening-14-3-focus-calibration",
          text: "14.3. In the pop-up Eucentricity by Focus Setup window, only check Use View area in Low Dose mode while leaving others by default, and then click Current Settings. After completion, click OK to close the window.",
          important: false
        }
      ]
    },

    // Step 15
    {
      id: "screening-15-highmag-eval",
      text: "15. Acquire high-magnification images for ice and sample evaluation.",
      important: false,
      children: [
        {
          id: "screening-15-1-mmm",
          text: "15.1. Create a Medium Magnification Map (MMM) of a square of interest",
		  meta: "Please note: For a later reloaded grid, a point added on its LMM may not guide the stage accurately due to small shift/rotation from reloading, rather than image offsets between mags. So, DONOT try to correct it using Step 13(1). Instead, use Go To XY for rough positioning, then manually adjust to the target using View images or FluCam (if the Screen is inserted, minimize dwell time on the sample to reduce dose damage). Finally, click Add Stage Pos in the Navigator window to add a new point and use this updated point for targeting the square of interest.",
          important: false,
		  children: [
				{
				  id: "screening-15-1-1-mmm",
				  text: "15.1.1. Right click the MMM on the Script tool bar (Fig. 6) and edit SetDirectory X:\YYYYMMDD to specify the location for MMM data, then click OK.",
				  important: false
				},
				{
				  id: "screening-15-1-2-mmm",
				  text: "15.1.2. Add a point on the LMM where you want to screen, e.g., the square center. Then click the MMM script to create a map with one View image.",
				  important: false
				},
		  ]
        },
        {
          id: "screening-15-2-mmm",
          text: "15.2. Edit the SPA-screening script, e.g., edit “SetDirectory X:\YYYYMMDD” to specify the screening data saving location, then click OK.",
          important: false
        },
        {
          id: "screening-15-3",
          text: "Screen one by one or screen multiple points",
          important: false,
		  children: [
			{
			  id: "screening-15-3-1-mmm",
			  text: "15.3.1. Screen one by one: Add a point on the MMM for your target of interest, then click the script SPA-screening on the Script tool bar.",
			  important: false
			},
			{
			  id: "screening-15-3-1-mmm",
			  text: "15.3.2. Screen multiple points: Add points for multiple targets & check Acquire (A) for each point. Then click SerialEM>Navigator>Acquire at Items. In the pop-up window (Fig. 11), select Final Data, and ONLY check Run Script in the Primary Action section and select the SPA-screening script. Then click GO.",
			  important: false,
			  image:{
				  src:"images/fig11.png"
			  }
			},
		  ]
        },
        {
          id: "screening-15-4-mmm",
          text: "15.4. Repeat steps (1)-(3) for all squares of interest.",
          important: false
        },
      ]
    },

    // Step 16
    {
      id: "screening-16-next-grid",
      text: "16. Load another grid of interest and repeat the screening workflow.",
      important: false,
      meta: "change the Registration# in the Navigator window to match the number of the LMM#",
    },

    // Step 17
    {
      id: "screening-17-finish-screening",
      text: "17. Repeat for all grids of interest, then save and close the Navigator file.",
      important: false
    }
  ]
},

{
  id: "part-c-spa-data-collection",
  title: "Part C: SPA Data collection",
  subtitle: "From SPA LMMs and MMMs to automatic multi-shot data acquisition and transfer.",
  items: [
    // 18. LMM of selected grid
    {
      id: "spa-18-lmm-selected-grid",
      text: "18. Acquire an LMM of the selected grid.",
      important: false,
      children: [
        {
          id: "spa-18-1-load-grid",
          text: "18.1. Load the selected grid, insert the 150 µm C2 aperture, open a new Navigator file, open Column valves.",
          important: false
        },
        {
          id: "spa-18-2-setup-full-montage",
          text: "18.2. @SerialEM, click Navigator>Montaging & Grids>Setup Full Montage. 1) Setup the pop-up Montage Setup window as Fig. 7 (use 5x7 for a full map). Then click OK. 2) Keep the default settings in the newly pop-up File Properties window. Then click OK. 3) Specify a name (e.g., LMM-Slot#-SPA) for LMM data.",
          important: false,
		  image: {
			  src:"images/fig7-lmm-montage-setup.png"
		  }
        },
        {
          id: "spa-18-3-start-montage",
          text: "18.3. Click Start @SerialEM>Montage Controls tab.",
          important: false
        },
        {
          id: "spa-18-4-save-nav-spa",
          text: "18.4. After completion, insert the 30 µm C2 aperture (& desired Objective aperture if needed) and save the Navigator file as Nav-SPA.nav.",
          important: false
        }
      ]
    },

    // 19. MMMs for selected squares
    {
      id: "spa-19-mmms-selected-squares",
      text: "19. Acquire MMMs for selected squares.",
      important: false,
      children: [
        {
          id: "spa-19-1-verify-alignments",
          text: "19.1. Verify the image alignments performed in Step 13 (Search–View–Record) and refine them if necessary.",
          important: false
        },
        {
          id: "spa-19-2-select-squares",
          text: "19.2. Select squares: add points at the center of squares & check Acquire (A) in Navigator window for them.",
          important: false
        },
        {
          id: "spa-19-3-add-polygon-size",
          text: "19.3. Add a Polygon to define the size of MMM: click Add Polygon in the Navigator window. After defining the Polygon around a grid square, click Stop Adding.",
          meta: "add the polygon around the first selected square",
          important: false
        },
        {
          id: "spa-19-4-setup-mmm-montage",
          text: "19.4. Setup and acquire MMMs: 1) (if not performed right after 19(3), ensure the polygon has been selected) click SerialEM>Navigator>Montaging & Grids>Setup Polygon Montage. Then set up the Montage Setup window as in Fig. 7, except for checking Use View parameters in Low Dose mode and keeping the auto-calculated values. Then click OK. 2) Leave the File Properties window at default settings, then click OK. 3) Specify a name (e.g., MMM_Slot#_SPA) and your data folder for MMM data. 4) Click SerialEM>Navigator> Acquire at Items. Setup the window as Fig. 11, then click GO.",
          meta: "Do not check the box next to Make map from each montage if Navigator open. ",
          important: false
        }
      ]
    },

    // 20. Generate acquisition pattern (multi-shot)
    {
      id: "spa-20-generate-acquisition-pattern",
      text: "20. Generate an acquisition pattern.",
      important: false,
      children: [
        {
          id: "spa-20-1-define-location",
          text: "20.1. Define the location: Go To XYZ of Carbon, move to the bottom corner of a hole on view images, ensure the 9 holes are not distorted and free of large ice particles, then autofocus to -2 µm.",
          important: false
        },
        {
          id: "spa-20-2-define-pattern-points",
          text: "20.2. Define acquisition pattern: 1) Acquire a View image. 2) Add 5 points (must be in one group) in the same corner of 5 holes in the image as Fig. 12A (e.g., #8 at the center and #9-12 clockwise).",
          important: false,
		  image: {
			  src:"images/fig12.png"
		  }
        },
        {
          id: "spa-20-3-generate-pattern",
          text: "20.3. Generate an acquisition pattern (e.g., for R1.2/1.3 grids): ",
          important: false,
		  children: [
			  {
				id: "spa-20-3-1-define-pattern-points",
				text: "20.3.1. Select the center point (e.g., #8 in Fig. 12A).",
				important: false,
				image: {
					  src:"images/fig12.png"
				}
			  },
			  {
				id: "spa-20-3-2-define-pattern-points",
				text: "20.3.2. Click Navigator>Montaging&Grids>Set Multi-shot Parameters, and set up the pop-up window (e.g., as Fig. 12E for a 2 shoots x 9 holes acquisition pattern, and modify the parameters as needed.",
				important: false,
				image: {
					  src:"images/fig12.png"
				}
			  },
			  {
				id: "spa-20-3-3-define-pattern-points",
				text: "20.3.3. Click For Corners of Regular Pattern, then click IS to Nav Pt; and then click OK in the pop-up message.",
				important: false
			  },
			  {
				id: "spa-20-3-4-define-pattern-points",
				text: "20.3.4. Click IS to Nav Pt again to apply a beam/image shift to #9, although #10 will be selected (in orange).",
				important: false
			  },
			  {
				id: "spa-20-3-5-define-pattern-points",
				text: "20.3.5. Acquire a Preview image. Estimate where the location is at the current Record magnification (e.g., based on the zoom-out view and the FFT image of this Preview image). Then right click and drag the image towards the bottom center of the hole of #9, and then take another Preview image. Repeat this step until moving to the bottom center of the hole of #9 (Fig.12B).",
				important: false
			  },
			  {
				id: "spa-20-3-6-define-pattern-points",
				text: "20.3.6. Click Save Image Shift in the Multiple Record Setup window.",
				important: false
			  },
			  {
				id: "spa-20-3-7-define-pattern-points",
				text: "20.3.7. Repeat steps 4)-6) for the remaining three points # 10-12.",
				important: false
			  },
		  ]
        },
        {
          id: "spa-20-4-adjust-hole-9",
          text: "20.4. Change the settings of Regular pattern of holes to 4 by 4. ",
          important: false
        },
        {
          id: "spa-20-5-adjust-remaining-points",
          text: "20.5. Verify the pattern on a View image. An example is shown in Fig. 12C.",
          important: false
        },
        {
          id: "spa-20-6-regular-pattern-4x4",
          text: "20.6. Save the setting file in your or your lab’s SerialEM folder. ",
          important: false
        },
      ]
    },

    // 21. Reference image (optional)
    {
      id: "spa-21-reference-image",
      text: "21. Set up a Reference image for precise targeting (optional): ",
      important: false,
	  meta: [
		  "21.1. Go to a clean and representative area, and then take a View image. Or load a good MMM.",
		  "21.2. Ctrl+Shift+left mouse to draw a square centered on the pattern (e.g., Fig. 12D for a 16-holes patten).",
		  "21.3. Click SerialEM>Process>Crop Image. And save the cropped image in T buffer.",
		  "21.4. Ensure that Copy A $buffer is disabled in your SPA-Acquisition script by adding a leading #. However, if a reference is not used, remove the # to enable the Copy A $buffer.",
	  ],
	  metaStacked: true,
	  image: {src:"images/fig12.png"}
	},

    // 22. Add points for SPA data collection
    {
      id: "spa-22-add-points-spa-data",
      text: "22. Add points for SPA data collection.",
      important: false,
      children: [
        {
          id: "spa-22-a-hole-finder",
          text: "by Hole Finder:",
			children: [
				{
				  id: "spa-22-a-1-hole-finder-menu",
				  text: "22.a.1 Double click an MMM in SerialEM Navigator window to load it (Ensure SerialEM>Navigator> Montaging&Grids>Show Shots when Show Acquire and Show Whole Area for All Points are checked).",
				  important: false
				},
				{
				  id: "spa-22-a-2-hole-finder-menu",
				  text: "22.a.2 Click SerialEM>Navigator>Montaging&Grids>Find Holes in Regular Grid.",
				  important: false
				},
				{
				  id: "spa-22-a-3-hole-finder-menu",
				  text: "22.a.3 (Optional) Add a Polygon around the area of interest to define the region of interest.",
				  meta: "Optional",
				  important: false
				},
				{
				  id: "spa-22-a-4-hole-finder-menu",
				  text: "22.a.4 Set up the Hole Finder window as Fig. 12F: 1) Measure hole size by drawing a line over a hole on MMM and enter it for Hole size. 2) Measure periodicity and input the value in the box of Periodicity.",
				  important: false,
				  image: {src:"images/fig12.png"}
				},
				{
				  id: "spa-22-a-5-hole-finder-menu",
				  text: "22.a.5 Click Find Holes, and exclude holes with the slid bars as needed (blue: excluded; red: active holes).",
				  important: false
				},
				{
				  id: "spa-22-a-6-hole-finder-menu",
				  text: "22.a.6 Click Make Navigator Points.",
				  important: false
				},
				{
				  id: "spa-22-a-7-hole-finder-menu",
				  text: "22.a.7 Click Navigator>Montaging&Grids>Combine Pints for Multi-shots. Set up the pop-up Multiple Hole Combiner window as Fig. 12G, but set your desired number of holes, then click the Combine Points.",
				  important: false,
				  image: {src:"images/fig12.png"}
				},
				{
				  id: "spa-22-a-8-hole-finder-menu",
				  text: "22.a.8 Edit the points as needed:",
				  important: false, 
				  children: [
					  {
						  id: "22-a-8-1",
						  text: "22.a.8.1. Check Edit mode in the Negative window.",
						  important: false
					  },
					  {
						  id: "22-a-8-2",
						  text: "22.a.8.2. Edit the points:",
						  important: false, 
						  meta: [
							  "Add Points and check Acquire (A).",
							  "Delete Points: i) one point: Left click the point on the map to select it, then double click to delete it; or select the point in the navigator list, then press Backspace key. ii) multiple points: Ctrl+ Left click to select all points and then click @Navigator>Delete Item. iii) multiple contiguous points: select the first point on the navigator list, press Shift+D, then select the last point, press Shift+D.",
							  "Move Point: select the point and right click the desired location.",
							  "Specify acquisition for contiguous items: select the first item on the navigator list, press Shift+A, then select the last item, press Shift+A.",
						  ],
						  metaStacked: true,
					  },
					  {
						  id: "22-a-8-3",
						  text: "22.a.8.3. Delete unwanted holes inside a pattern: select the pattern point, then Shift+double click the holes.",
						  important: false
					  },
					  {
						  id: "22-a-8-4",
						  text: "22.a.8.4. Then uncheck Edit mode and save the Navigator file as Nav-SPA.nav in your data folder.",
						  important: false
					  },
				  ],
				},
			],
          important: false
        },
        {
          id: "spa-22-b",
          text: "22.b. by 5-points lattice",
		  meta: "Optional; only need this when Hole Finder failed",
          important: false,
		  children: [
			  {
				  id: "spa-22-b-1", 
				  text: "22.b.1. Double click an MMM in SerialEM Navigator window to load it (Ensure SerialEM>Navigator> Montaging&Grids>Show Shots when Show Acquire and Show Whole Area for All Points are checked).",
				  important: false,
			  },
			  {
				  id: "spa-22-b-2", 
				  text: "22.b.2. Add a Polygon around the area of interest.",
				  important: false,
			  },
			  {
				  id: "spa-22-b-3", 
				  text: "22.b.3. Define a lattice by adding 5 points at the center of 5 holes (three at one corner and two at two adjacent corners, put the points evenly to reduce extrapolation errors).",
				  important: false,
			  },
			  {
				  id: "spa-22-b-4", 
				  text: "22.b.4. Select one of the five spots, then click @Navigator> Montaging & Grids> Add Grid of Points. Provide the Polygon label number. Then acquisition points will be automatically added.",
				  important: false,
			  },
			  {
				  id: "spa-22-b-5", 
				  text: "22.b.5. Edit the points as needed, then save the Navigator file.",
				  important: false,
			  },
		  ]
        },
      ]
    },

    // 23. Automatic data acquisition
    {
      id: "spa-23-automatic-data-acquisition",
      text: "23. Automatic data acquisition.",
      important: false,
      children: [
        {
          id: "spa-23-1-edit-spa-script",
          text: "23.1. Edit the SPA-Acquisition script (red texts below) to specify your desired defocus range. Then click OK.",
		  meta: "CallFunction MyFuncs::CycleTargetDefocus -0.8 -1.8 0.2",
          important: false
        },
        {
          id: "spa-23-2-camera-setup",
          text: "23.2. Finalizing the settings of Record: Click Setup @Camera & Script tab (Fig. 5). In the pop-up Camera Parameters window:",
          important: false, 
		  children: [
			  {
				  id: "spa-23-2-1",
				  text: "23.2.1. Set up the Record parameters as Fig 9, and make changes as needed.",
				  important: false,
			  },
			  {
				  id: "spa-23-2-2",
				  text: "23.2.2. Click Set Up icon. In the pop-up Frame Alignment Parameters window, select With IMOD.",
				  important: false,
			  },
			  {
				  id: "spa-23-2-3",
				  text: "23.2.3. Click Set File Options. Then set up the newly pop-up Frame File Options window as Fig. 10, and modified the parameters as needed.",
				  important: false,
				  image:{src:"images/fig12.png"},
			  },
			  {
				  id: "spa-23-2-4",
				  text: "23.2.4. Click Set Folder, then create and select a sub-folder in your data folder in K3 PC to save the movie data (e.g., X:\YYYYMMDD\Movie in YSB).",
				  important: false,
			  },
		  ]
        },
        {
          id: "spa-23-3-close-open-files",
          text: "23.3. Click SerialEM>File>Close All Files to close all opened files such as MMM files.",
          important: false
        },
        {
          id: "spa-23-4-final-checklist",
          text: "23.4. Double check the following items (edit the checking-list for your own need):",
          important: true, 
		  children: [
			  {
				  id: "spa-23-4-1",
				  text: "23.4.1. The position of autofocus area has been well defined, e.g., no overlapping with the Record area.",
				  important: true,
			  },
			  {
				  id: "spa-23-4-2",
				  text: "23.4.2. The position of autofocus area has been well defined, e.g., no overlapping with the Record area.",
				  important: true,
			  },
			  {
				  id: "spa-23-4-3",
				  text: "23.4.3. Stage tilt is 0.",
				  important: true,
			  },
			  {
				  id: "spa-23-4-4",
				  text: "23.4.4. Appropriate C2/Objective apertures have been used.",
				  important: true,
			  },
			  {
				  id: "spa-23-4-5",
				  text: "23.4.5. Beam is accurately centered.",
				  important: true,
			  },
			  {
				  id: "spa-23-4-6",
				  text: "23.4.6. Saving of movie has been checked.",
				  important: true,
			  },
			  {
				  id: "spa-23-4-7",
				  text: "23.4.7. The Standalone Camera icon for K3 shutter is in yellow.",
				  important: true,
			  },
		  ]
        },
        {
          id: "spa-23-5-acquire-at-items",
          text: "23.5. Click SerialEM>Navigator>Acquire at Items. In the pop-up window, select Final Data, and:",
          important: false, 
		  meta: "For the 1st shot, 4 files are created: K3_*.dm4 (Gain reference), *.tif (Movie data), *.pcm, and *.mdoc (containdetailed parameters like pixel size and dose). Subsequent shots will only have the last three files.",
		  children: [
			  {
				  id: "spa-23-5-1",
				  text: "23.5.1. @ Primary Action section, check Run Script and select the SPA-Acquisition script.",
				  important: true,
			  },
			  {
				  id: "spa-23-5-2",
				  text: "23.5.2. @ Tasks before or after Primary section, check Run Script before Action and select WaitForRefilling. If you would like to use the Autocenter Beam, also check it and setup the parameters as trained.",
				  important: true,
			  },
			  {
				  id: "spa-23-5-3",
				  text: "23.5.3. @ General option section, check Close Column Valves at end. Then click GO.",
				  important: true,
			  },
		  ]
        },
      ]
    },

    // 24. Automatic data transferring
    {
      id: "spa-24-automatic-transfer",
      text: "24. Automatic data transferring.",
      important: false,
      children: [
        {
          id: "spa-24-1-cluster-folder",
          text: "24.1. On the cluster, create a new folder named with the current date for this SPA session.",
          important: false
        },
        {
          id: "spa-24-2-mkdir-subfolders",
          text: "24.2. Open a Cygwin window and create 3 folders inside your cluster folder, e.g., by typing the text below:",
		  meta: ["$ cd /cygdrive/z/GlaciosYSB/Your-Folder",
				"$ mkdir alignedJPG alignedMRC rawTIFF",
				],
		  metaStacked: true,
          important: true,
        },
        {
          id: "spa-24-3",
          text: "24.3. Go to your movie folder in K3 PC and run Framewatcher, e.g., by typing the text below (update the text with information about your folder in the cluster and total dose):",
		  meta: ["$ cd /cygdrive/x/Your-folder/Movie",
				"$ framewatcher -noc -pr /cygdrive/z/GlaciosYSB/Your-Folder/rawTIFF",
				],
		  metaStacked: true,
          important: true,
        },
        {
          id: "spa-24-4",
          text: "24.4. You can check the data by switching to the command line below, which aligns movies & generates FFT images. But it is advisable to return to the above option after checking, because aligning a movie takes longer than acquiring a movie, causing transfer delays.",
		  meta: ["$ framewatcher -gpu 0 -bin 2 -po 1024 -v 200 -dtotal 40 -o /cygdrive/z/GlaciosYSB/Your-folder/alignedMRC -pr /cygdrive/z/GlaciosYSB/Your-folder/rawTIFF -thumb /cygdrive/z/GlaciosYSB/Your-folder/alignedJPG",
				],
		  metaStacked: true,
          important: true,
        },
        {
          id: "spa-24-5",
          text: "24.5. Note: All raw data and mdoc files are transferred to the rawTIFF folder. If the later command line is used, aligned sum MRC files and compressed jpg images with power spectra are saved in alignedMRC and alignedJPG, respectively.",
          important: true,
        },
      ]
    },

    // 25. Add points with Dummy SerialEM (optional)
    {
      id: "spa-25-dummy-serialem",
      text: "25. Add more points with Dummy SerialEM.",
      important: false,
      meta: "Use a separate Dummy SerialEM instance to prepare additional Navigator points while real data collection is running.",
      children: [
        {
          id: "spa-25-1-open-dummy-settings",
          text: "25.1. Open Dummy SerialEM, load your latest settings file, and save it as Setting-Dummy.txt.",
          important: false
        },
        {
          id: "spa-25-2-copy-nav-for-dummy",
          text: "25.2. @SerialEM, open the Nav-SPA.nav file and save it as Nav-Dummy.nav.",
          important: false
        },
        {
          id: "spa-25-3-add-points-dummy",
          text: "25.3. Load an MMM and add points as Step 22. Repeat for all squares, then save the Nav-Dummy.nav.",
          important: false
        },
        {
          id: "spa-25-4-merge-back",
          text: "25.4. In the real SerialEM, stop the data acquisition, then click SerialEM>Navigator>Merge File, select Nav-Dummy.nav and merge it to Nav-SPA.nav.",
          important: false
        }
      ]
    }
  ]
}
];

/* ------------ STATE & PERSISTENCE ------------ */

const STORAGE_KEY = "protocol-serialem-glacios-k3-v15";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Could not load protocol progress:", e);
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn("Could not save protocol progress:", e);
  }
}

function resetProgress() {
  saveProgress({});
  currentSearchQuery = "";
  if (searchInputEl) searchInputEl.value = "";
  if (searchClearEl) searchClearEl.classList.remove("visible");
  renderApp(currentSectionId);
}

/* ------------ SEARCH HELPERS ------------ */

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return ch;
    }
  });
}

function highlightHtml(orig, query) {
  if (!query) return escapeHtml(orig);
  const re = new RegExp(escapeRegExp(query), "ig");
  let result = "";
  let lastIndex = 0;
  let match;

  while ((match = re.exec(orig)) !== null) {
    const before = orig.slice(lastIndex, match.index);
    result += escapeHtml(before);
    result += `<mark class="search-highlight">${escapeHtml(match[0])}</mark>`;
    lastIndex = match.index + match[0].length;
  }
  result += escapeHtml(orig.slice(lastIndex));
  return result;
}

/* ------------ DATA UTILITIES ------------ */

function flattenItems(items) {
  const arr = [];
  for (const item of items) {
    arr.push(item);
    if (item.children && item.children.length) {
      arr.push(...flattenItems(item.children));
    }
  }
  return arr;
}

function countCompleted(items, progress) {
  const flat = flattenItems(items);
  let done = 0;
  for (const item of flat) {
    if (progress[item.id]) done++;
  }
  return { done, total: flat.length };
}

function getAllItemsAcrossSections() {
  let all = [];
  for (const section of protocolData) {
    all = all.concat(flattenItems(section.items));
  }
  return all;
}

/* ------------ DOM REFERENCES ------------ */

const sectionListEl = document.getElementById("sectionList");
const bulletListRootEl = document.getElementById("bulletListRoot");
const protocolHeaderEl = document.getElementById("protocolHeader");
const highlightListEl = document.getElementById("highlightList");
const highlightEmptyEl = document.getElementById("highlightEmpty");
const overallProgressFillEl = document.getElementById("overallProgressFill");
const overallProgressLabelEl = document.getElementById("overallProgressLabel");
const resetBtn = document.getElementById("resetProgressBtn");
const searchInputEl = document.getElementById("searchInput");
const searchClearEl = document.getElementById("searchClear");

let currentSectionId = protocolData[0]?.id || null;
let currentSearchQuery = "";

/* ------------ RENDERING ------------ */

function renderApp(sectionId) {
  if (!sectionId && protocolData.length) {
    sectionId = protocolData[0].id;
  }
  currentSectionId = sectionId;

  const progress = loadProgress();
  renderSections(progress);
  renderSectionContent(sectionId, progress);
  renderHighlights(sectionId, progress);
  renderOverallProgress(progress);
  applySearchFilter(); // re-apply search after re-render
}

function renderSections(progress) {
  sectionListEl.innerHTML = "";

  protocolData.forEach((section, idx) => {
    const { done, total } = countCompleted(section.items, progress);
    const completed = done === total && total > 0;

    const li = document.createElement("li");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "section-button";
    if (section.id === currentSectionId) btn.classList.add("active");
    if (completed) btn.classList.add("completed");

    const main = document.createElement("span");
    main.className = "section-button-main";

    const idxSpan = document.createElement("span");
    idxSpan.className = "section-index";
    idxSpan.textContent = (idx + 1).toString().padStart(2, "0");

    const label = document.createElement("span");
    label.className = "section-label";
    label.textContent = section.title;

    main.appendChild(idxSpan);
    main.appendChild(label);

    const progressSpan = document.createElement("span");
    progressSpan.className = "section-progress";
    if (total === 0) {
      progressSpan.textContent = "—";
    } else {
      const pct = Math.round((done / total) * 100);
      progressSpan.textContent = `${done}/${total} · ${pct}%`;
    }

    btn.appendChild(main);
    btn.appendChild(progressSpan);

    btn.addEventListener("click", () => {
      currentSearchQuery = "";
      if (searchInputEl) searchInputEl.value = "";
      if (searchClearEl) searchClearEl.classList.remove("visible");
      renderApp(section.id);
    });

    li.appendChild(btn);
    sectionListEl.appendChild(li);
  });
}

function renderSectionContent(sectionId, progress) {
  const section = protocolData.find(s => s.id === sectionId);
  if (!section) {
    protocolHeaderEl.innerHTML = "<p>Unknown section.</p>";
    bulletListRootEl.innerHTML = "";
    return;
  }

  // Header
  const headerFrag = document.createDocumentFragment();
  const h = document.createElement("h2");
  h.className = "protocol-title";
  h.textContent = section.title;
  headerFrag.appendChild(h);

  if (section.subtitle) {
    const p = document.createElement("p");
    p.className = "protocol-subtitle";
    p.innerHTML = section.subtitle.replace(
      /Version 15/gi,
      "<strong>Version 15</strong>"
    );
    headerFrag.appendChild(p);
  }
  protocolHeaderEl.innerHTML = "";
  protocolHeaderEl.appendChild(headerFrag);

  // Bullets
  bulletListRootEl.innerHTML = "";
  const listEl = renderItemList(section.items, progress, false);
  bulletListRootEl.append(...listEl.childNodes);
}

function createStepImageContainer(item) {
  const container = document.createElement("div");
  container.className = "step-image-container";

  const figure = document.createElement("figure");
  figure.className = "step-image-figure";

  const wrapper = document.createElement("div");
  wrapper.className = "step-image-wrapper";

  const img = document.createElement("img");
  img.className = "step-image";
  img.src = item.image.src;
  img.alt = item.image.alt || "";

  wrapper.appendChild(img);
  figure.appendChild(wrapper);

  if (item.image.caption) {
    const caption = document.createElement("figcaption");
    caption.className = "step-image-caption";
    caption.innerHTML = item.image.caption;
    figure.appendChild(caption);
  }

  container.appendChild(figure);
  return container;
}

function toggleStepImage(li, item) {
  if (!item.image) return;

  let container = li.querySelector(".step-image-container");
  if (!container) {
    container = createStepImageContainer(item);
    li.appendChild(container);
  }

  const isOpen = container.classList.contains("open");
  if (isOpen) {
    container.classList.remove("open");
  } else {
    container.classList.add("open");
  }
}

function renderItemList(items, progress, nested) {
  const ul = document.createElement("ul");
  ul.className = "bullet-list";
  if (nested) ul.classList.add("nested");

  items.forEach(item => {
    const li = document.createElement("li");
    li.className = "bullet-item";
    if (item.important) li.classList.add("important");
    if (item.image) li.classList.add("has-image");
    if (progress[item.id]) li.classList.add("completed");

    const label = document.createElement("label");
    label.className = "bullet-item-label";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "bullet-checkbox";
    cb.checked = !!progress[item.id];
    cb.dataset.itemId = item.id;

    const dot = document.createElement("div");
    dot.className = "bullet-dot";
    dot.textContent = "•";

    const text = document.createElement("div");
    text.className = "bullet-text";
    text.textContent = item.text;
    text.dataset.original = item.text;

    label.appendChild(cb);
    label.appendChild(dot);
    label.appendChild(text);
    li.appendChild(label);
	
	if (item.meta) {
      const metaContainer = document.createElement("div");
      metaContainer.className = "bullet-meta";

      // Per-item layout flag:
      // - metaStacked === true  → one pill per line
      // - metaStacked undefined → default inline layout
      if (item.metaStacked === true) {
        metaContainer.classList.add("meta-stacked");
      }

      const metaValues = Array.isArray(item.meta) ? item.meta : [item.meta];

      metaValues.forEach((metaText) => {
        if (!metaText) return;
        const pill = document.createElement("span");
        pill.className = "pill";
        pill.textContent = metaText;
        metaContainer.appendChild(pill);
      });

      if (metaContainer.childNodes.length > 0) {
        li.appendChild(metaContainer);
      }
    }

    // Children (sub-bullets)
    if (item.children && item.children.length) {
      const nestedUl = renderItemList(item.children, progress, true);

      // Collapsible toggle button
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "collapse-toggle";
      toggle.setAttribute("aria-expanded", "true");
      toggle.title = "Collapse/expand sub-steps";
      toggle.textContent = "▾";

      toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        const collapsed = li.classList.toggle("collapsed");
        toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      });

      li.appendChild(toggle);
      li.appendChild(nestedUl);
    }

        // Linear step behavior across ALL sections:
    // - If you check a later step, all previous steps in the entire protocol become checked.
    // - If you uncheck a step, that step and all later steps (in any section) become unchecked.
    cb.addEventListener("change", (ev) => {
      ev.stopPropagation();

      const allItemsGlobal = getAllItemsAcrossSections(); // uses all sections in order
      const clickedId = cb.dataset.itemId;
      const clickedIndex = allItemsGlobal.findIndex(i => i.id === clickedId);
      if (clickedIndex === -1) return;

      const prog = loadProgress();

      if (cb.checked) {
        // Mark all previous (0..clickedIndex) as done
        for (let i = 0; i <= clickedIndex; i++) {
          prog[allItemsGlobal[i].id] = true;
        }
      } else {
        // Clear this and all later (clickedIndex..end)
        for (let i = clickedIndex; i < allItemsGlobal.length; i++) {
          delete prog[allItemsGlobal[i].id];
        }
      }

      saveProgress(prog);
      renderApp(currentSectionId);
    });

    // Click row to toggle image (if present), but ignore clicks on checkbox / collapse toggle
    li.addEventListener("click", (event) => {
      if (event.target.closest(".bullet-checkbox") ||
          event.target.closest(".collapse-toggle")) {
        return;
      }
      if (item.image) {
        toggleStepImage(li, item);
      }
    });

    ul.appendChild(li);
  });

  return ul;
}

function renderHighlights(sectionId, progress) {
  const section = protocolData.find(s => s.id === sectionId);
  if (!section) return;

  highlightListEl.innerHTML = "";

  const importantItems = flattenItems(section.items).filter(item => item.important);

  if (!importantItems.length) {
    highlightEmptyEl.style.display = "block";
    return;
  }

  highlightEmptyEl.style.display = "none";

  importantItems.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className = "highlight-item";

    const line = document.createElement("div");
    line.className = "highlight-line";

    const badge = document.createElement("span");
    badge.className = "highlight-badge";
    badge.textContent = "Important";

    const text = document.createElement("span");
    text.className = "highlight-text";
    text.textContent = item.text;

    line.appendChild(badge);
    line.appendChild(text);
    li.appendChild(line);

    const loc = document.createElement("div");
    loc.className = "highlight-location";
    loc.textContent = `${section.title} · Step ${idx + 1}`;
    li.appendChild(loc);

    highlightListEl.appendChild(li);
  });
}

function renderOverallProgress(progress) {
  const allItems = getAllItemsAcrossSections();
  const total = allItems.length;
  let done = 0;

  for (const item of allItems) {
    if (progress[item.id]) done++;
  }

  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  overallProgressFillEl.style.width = `${pct}%`;
  overallProgressLabelEl.textContent =
    total === 0 ? "0 / 0" : `${done} / ${total} · ${pct}%`;
}

/* ------------ SEARCH LOGIC ------------ */

function applySearchFilter() {
  const query = currentSearchQuery.trim().toLowerCase();
  const items = bulletListRootEl.querySelectorAll(".bullet-item");

  items.forEach((li) => {
    const textEl = li.querySelector(".bullet-text");
    if (!textEl) return;

    const orig = textEl.dataset.original || textEl.textContent || "";

    if (!query) {
      li.classList.remove("search-hidden");
      textEl.innerHTML = escapeHtml(orig);
      return;
    }

    const haystack = li.textContent.toLowerCase();
    if (haystack.includes(query)) {
      li.classList.remove("search-hidden");
      textEl.innerHTML = highlightHtml(orig, query);
    } else {
      li.classList.add("search-hidden");
      textEl.innerHTML = escapeHtml(orig);
    }
  });
}

if (searchInputEl) {
  searchInputEl.addEventListener("input", () => {
    currentSearchQuery = searchInputEl.value;
    if (searchClearEl) {
      if (currentSearchQuery.trim()) {
        searchClearEl.classList.add("visible");
      } else {
        searchClearEl.classList.remove("visible");
      }
    }
    applySearchFilter();
  });
}

if (searchClearEl) {
  searchClearEl.addEventListener("click", () => {
    currentSearchQuery = "";
    searchInputEl.value = "";
    searchClearEl.classList.remove("visible");
    applySearchFilter();
  });
}

/* ------------ INIT ------------ */

resetBtn.addEventListener("click", () => {
  if (confirm("Clear all checkmarks for this protocol in this browser?")) {
    resetProgress();
  }
});

renderApp(currentSectionId);