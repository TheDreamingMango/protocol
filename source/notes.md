# Protocol notes

**Phase: build.** Capture continues here. Write only what was said. The site structure lives in `source/site.md`.

Raw capture of the protocol, written only from what was said.
Do not invent steps, claims, or results. Do not reorganize this file; the site draws from it.

---

## What maladaptive daydreaming is, and why it's bad

You slip into a daydream when you're not satisfied with the present — when you're not into the present, when the present isn't good enough for you.

If you slip into a daydream, you can imagine anything. You can imagine yourself as a superhero, doing incredibly good things, just a hero. You feel amazing dopamine-like rushes. You just feel incredible.

It's bad because it's maladaptive: you're doing it for hours. You're pouring energy into something that isn't even real. That energy is fully wasted.

It could have been spent being in the present. The present may have been more boring, but you would have been progressing your life within it. The energy would have been better spent living in the present — resting yourself, working on things you actually want to work on, chasing your actual goals.

## Making the trade-off harder

You stop by making the trade-off harder for your mind.

The trade-off right now: if you choose to daydream, you accept that you'll feel pretty shitty when you eventually have to stop — one hour, two hours later — but you'll feel great during the daydream, which you can experience right here and right now. The alternative: you can feel much better about yourself in the long term, but you have to feel much worse right now if you stay in the present.

It's a clear choice every time you choose a daydream or choose to stay in the present.

You can add factors to make that choice more clear. The single most effective thing you can do is make your life more worth living. Hobbies, friends, relationships, a dog — things that make the present better. Then it's more fun to be in the present than to go into the daydream. The trade-off tilts in the present's favor.

That's really important. If you don't do it and the present becomes worse — a bad environment, a messy room, whatever makes the present worse — it becomes even more tempting to go into the daydream. It's all about managing this trade-off.

## Music and social media

Music is a really, really big trigger. It's probably the main trigger for everyone. Music is so tempting because it can make a daydream incredibly good — so much more fun if there's music playing. You have to get rid of your music first. You have to really manage it and hone it. That's huge.

Another important thing to block is social media. If you're constantly scrolling — endless scrolling content — your mind gets more restless, because it really wants a dopamine hit one after another. When you're doing endless scrolling, you're training your mind to become increasingly restless. Then the present becomes much harder. It becomes more difficult to just sit in the present, which means you always want to be doing something. Your mind becomes restless, and daydreaming becomes more and more tempting because you just need to be stimulated. Your mind needs to be stimulated because it became so restless.

You have to block your music and you have to block your social media access, especially to endless scrolling content. Anything that gets you quick, easy dopamine hits — that's what you want to restrict. That ends up being music and social media.

## Blocking music and social media on the iPhone

How to block music and social media starts with the phone and the laptop. On the iPhone, this is done with Apple Configurator. It's what businesses use to create phones managed by the workplace — like a work phone Walmart gives you, managed through Apple Configurator.

You can create local certificate stuff and configure the device so there is a clear admin, and the phone adheres to a set of rules. It's managed by an organization that is actually you. When it's managed, you can add a profile on the iPhone so that certain things are blocked. You can create app blocks and website blocks for yourself, and restrict whatever you need to restrict.

That's how social media and music are restricted on the phone. YouTube can't be accessed and the YouTube app can't be downloaded. Instagram can't be downloaded at all, and it can't be accessed via Safari either. Social media and music are fully blocked because of this profile.

To become the admin that can create, modify, or remove this profile, you need a password. To get that password, there is a seed string and a number of iterations. A program was created for this: you do a hash-string multiplication on the seed string for about eight hours on the computer. After eight hours, you get the final password that enables admin access and lets you modify the settings if you really want to. That same string is also the profile removal password on the iPhone. That program is the Password System: https://github.com/TheDreamingMango/Password-System

That same password is the password used to install the certificate into the computer. Installing the certificate is what lets Apple Configurator manage the iPhone. The install is gated through that one password. The password has to be mined — generated — which takes hours.

It's very difficult to modify the settings and change the blocks that block music and social media on the iPhone. That's really great.

### What the Apple Configurator setup actually is

This is local self-supervision with Apple Configurator for Mac. There is no company MDM server and no Apple Business Manager. Same tools a workplace uses, used on yourself.

The vague pieces map to four official Apple objects:

1. **Organization.** A name you create in Apple Configurator. Only the name is required. It can be you. The iPhone shows it: Settings > General > About says the iPhone is supervised and names that organization. This is the "organization that is actually you."
2. **Supervision identity.** This is the "certificate." Officially it is an identity: a certificate **and** its private key. Creating the organization creates this identity (or you choose an existing one). The certificate half alone is not enough. Installing it on the computer is what lets Apple Configurator manage the iPhone. The password used to install it is the same mined password — the one that takes hours to generate. The Mac can manage the phone when that identity is installed.
3. **Supervised iPhone.** Prepare in Configurator turns supervision on and binds the phone to that organization and identity. Supervision is what makes the phone behave like a work phone: it will follow rules a normal iPhone can shrug off.
4. **Configuration profile.** A `.mobileconfig` file. This is the thing you add and remove. The blocks live here — app restrictions and website filters — not in the organization or the certificate.

You need the organization and the identity together. The organization is the nameplate on the phone. The identity is the proof that this Mac is allowed to act as that organization. Without the matching identity on the Mac, you cannot add or remove those profiles over USB the way the original Configurator Mac can.

This is not Screen Time, not Family Sharing, and not tapping a downloaded profile in Settings. A profile installed by tapping it on an unsupervised iPhone can be deleted in Settings if you know the device passcode. Supervision plus a profile installed by Configurator is what makes the blocks hard to take off from the phone itself.

Apple Configurator for Mac manages iPhone, iPad, and Apple TV. It does not manage the MacBook this way. The MacBook admin lock is a separate thing that happens to use the same mined password.

### How the four pieces work together

1. On a Mac, create an organization (you). Configurator generates the supervision identity and stores it in the keychain.
2. Plug in the iPhone and **Prepare** it as supervised, assigned to that organization, **not** enrolled in device management. Prepare erases the iPhone.
3. Create a configuration profile with the app blocks and website blocks.
4. Install the supervision identity on the admin Mac, plug the supervised iPhone into that Mac, and add the profile. On a supervised phone, Configurator installs it without the phone user tapping accept.
5. To add, replace, or remove a profile over USB, install the certificate on the Mac first. The password for that install is the mined password, which takes hours to generate. Then make the change.

If the identity is lost, the phone can stay supervised with the existing blocks on it, but you are no longer the admin over USB. Apple’s documented way to attach a new identity is to erase, prepare, and supervise again.

The eight-hour hashed password is not an Apple Configurator feature. Apple’s admin is: whoever has the Mac with the supervision identity. The mined password is the extra lock in front of that — the password used to install the certificate, the same password used to get into the admin account on the MacBook, and the same string used as the profile’s removal password. That is what makes becoming the admin take about eight hours.

### Concrete steps: become the organization and get the certificate

App: **Apple Configurator** from the Mac App Store (this is the Mac app, not Apple Configurator for iPhone). Official guide: https://support.apple.com/guide/apple-configurator-mac/welcome/mac

1. Install Apple Configurator on the Mac you will use as the admin computer.
2. Open **Apple Configurator > Settings > Organizations**.
3. Click **Add (+)**.
4. If it asks for a Managed Apple Account from Apple School Manager or Apple Business, **Skip**. This setup does not need those.
5. Enter the organization. Only the **name** is required. Use your own name or any name you want the phone to show.
6. Choose **create a new supervision identity**. That is the certificate plus private key. Finish.

The identity is now in the Mac keychain. That is the local certificate. Installing it on the computer is what lets Apple Configurator manage the iPhone. The password used to install it is the mined password. Generating that password takes hours.

1. In **Settings > Organizations**, select the organization.
2. Gear / More → **Export Supervision Identity**. Format: **Encrypted PKCS12 (.p12)**. The passphrase is that mined password.
3. Or **Export Organization**, using that same password. Either export is enough to become admin again on a Mac with Configurator. Official steps: https://support.apple.com/en-us/101974

To install it when the blocks need updating — about once a month, or every two or three months — use that password. Import the organization, or double-click the `.p12`, add it to the System keychain, then in Configurator **Settings > Organizations** add the organization and **choose that existing supervision identity**. Then modify the profiles.

### Concrete steps: supervise the iPhone

Supervision cannot be turned on around existing data. Prepare erases the device. Back up first if anything on the phone matters.

1. Connect the iPhone to the Mac with its USB or Thunderbolt cable. Unlock it. Tap **Trust** if asked.
2. Select the iPhone. **Actions > Prepare** (or the Prepare button).
3. Choose **Manual Configuration**.
4. Check **Supervise devices**.
5. Choose whether the phone may pair with other computers. If other computers should not USB-manage it, leave pairing with other computers off.
6. Click Next. Choose **Do not enroll in Device Management**. No MDM server.
7. Skip Apple School Manager / Apple Business if asked.
8. Select the organization you created (or create it here). This is where the supervision identity gets bound to the phone.
9. Skip Setup Assistant panes if you want, then Prepare.

When it is done, Settings > General > About should say the iPhone is supervised and name the organization.

Changing supervision or changing the identity later means erase, prepare, and supervise again.

### Concrete steps: create the profile that holds the blocks

You do not need the phone plugged in to create the profile.

1. **File > New Profile**.
2. **General:** give it a **Name** and an **Identifier** (reverse-DNS, like `com.yourname.blocks`). Keep that identifier stable. A later profile with the same identifier replaces this one.
3. **Security** on this pane: **With Authorization**. Set the removal password to the same mined string — the eight-hour hash, the same password as the MacBook admin account. Settings on the phone can delete the profile only if that password is entered.
4. Left list → **Restrictions** → **Configure**.
   - Turn on **Restrict app usage** (supervised only). Put YouTube, Instagram, and any other apps that should stay gone on the disapproved list, using each app’s bundle ID. This is what stops those apps from being shown, launched, or used.
   - For music: turn off **Apple Music** and **Radio** if you want streaming gone. To hide the Music app itself, add Apple’s Music bundle ID `com.apple.Music` to the disapproved list. Apple Music off is not the same as hiding the Music app.
5. Left list → **Web Content Filter** → **Configure**.
   - Filter type: Built-in.
   - Use a denied-URL / blocked-sites list (not “specific websites only,” unless you intend to allow only a short allow list).
   - Add the sites that must stay blocked, with `https://` (and `http://` if needed). YouTube and Instagram are different hosts than `youtu.be` and similar short links — each host you actually use has to be listed. Blocking a site in Safari does not remove the app; that is why both Restrictions and the web filter are used.
6. **File > Save**. This writes a `.mobileconfig`.

That is the documented way to get: YouTube can’t be accessed and the YouTube app can’t be downloaded; Instagram can’t be downloaded and can’t be opened in Safari; social media and music blocked by the profile.

### Concrete steps: put the profile on the phone, or take it off

The phone must be plugged into a Mac that currently has the **same supervision identity** installed. Install the certificate with the mined password, then plug in.

**Add**

1. Connect the supervised iPhone. Trust the computer if asked.
2. Drag the `.mobileconfig` onto the device in Configurator, or **Actions > Add > Profiles**.
3. On a supervised iPhone, Configurator adds it without the user tapping through prompts.

**Remove or change**

1. Connect the same way.
2. **Actions > Remove > Profiles**, or add a new profile with the **same Identifier** to replace the old one.

Apple: if Configurator installed the profile, that supervising instance of Apple Configurator can remove it. That is the “admin that can create, modify, or remove this profile.” Installing the certificate that makes this Mac that admin uses the mined password.

On the phone, profiles appear under **Settings > General > VPN & Device Management**. Because Security is **With Authorization**, Delete Profile there asks for the removal password — the same mined string. Without computing it, the profile stays. Wiping the iPhone removes profiles; that is a different, destructive path.

### What the mined password is doing

Apple does not mine a password and does not make you wait eight hours. Apple’s lock is the supervision identity on a Mac.

The protocol uses that mined password as the password to install the certificate, as the MacBook admin password, and as Apple’s profile removal password. Same seed, same hash, about eight hours, one string. Installing the certificate is what lets Apple Configurator manage the iPhone. Until that password exists, you cannot install the certificate and use Configurator to change the blocks, and you cannot delete the profile from Settings on the phone.

So the layers are:

- **Apple:** supervised iPhone + organization + supervision identity + profile with the blocks, removal set to With Authorization.
- **Yours:** one password that takes about eight hours to compute. It is the password used to install the certificate, the Mac admin password, and the profile removal password.

It is supposed to be difficult to change the blocks. That is the point.

## Blocking on the MacBook

On the MacBook, you are straight up not the admin. The same password is used — the one that gets mined, with the seed string and the hashing algorithm you have to multiply for eight hours to compute.

Willpower is used to block all the websites. There is a GitHub for it: https://github.com/raviriley/Willpower. There is a block schedule for that. You can't access it unless you're in the admin account. Getting into the admin account takes that same password — the same password used to manage the Apple Configurator stuff.

## Physical lock for devices that can't be blocked

There are physical things that still have access. The TV remote has access to YouTube. The work laptop has access to YouTube, music, and social media. There are no blocks on those. The work computer is a work computer, so those blocks aren't something that can be put on it. Same for the TV — it isn't clear how to block it.

A box was bought, and a lock — a typical locker lock like the ones on school lockers, except it's a time-safe lock. It can be set for two hours. The work laptop and the TV remote go in the box for typical times when daydreaming would be expected.

The box personally used is https://www.amazon.com/dp/B0F2THBJSB. The lock personally used with it is https://www.amazon.com/dp/B09DYFPNFJ. These are just the specific products personally used; any suitable box and lock can be used.

Daydreaming usually starts around 5 p.m. or 6 p.m., after getting home from work. The work laptop and the TV remote go in immediately. The time lock is set for about three hours. Then music can't be accessed. That leaves only the devices that already have the blocks on them: the iPhone and the MacBook.

## When access is unavoidable

Sometimes you just have access. Maybe you have to be working, and/or maybe you need to have your work laptop out at that moment. Sometimes access is simply unavoidable. In that case, let yourself daydream.

Don't beat yourself up for it, and don't force yourself to daydream. Be understanding and compassionate towards yourself. If you beat yourself up, in the long run that will lead to low self-esteem, and that will lead to hating the present even more and more. That will make you want to daydream more, and put you on a self-sabotaging cycle. You can't be beating yourself up for daydreaming. It's understandable why we do that.

If you really need to daydream and you don't have any restrictions — you're unable, for whatever reason, to get a full proper restriction to YouTube and social media or some sort of trigger — let yourself use the trigger, but run Presence in the background.

Presence is a terminal user interface program for a computer: https://github.com/TheDreamingMango/presence. The app is not finished yet. When this website is online, the app will be done and will be on the Google Play Store and the Apple App Store. The site will probably show 1–2 screenshots of it. The Google Play Store and Apple App Store links will be provided; they do not exist yet. It's a timer. Start it when you're daydreaming and let it go in the background.

This helps interrupt music daydreams. Every minute it stops all audio on your devices. If you're playing music in the background, it stops the music and announces itself: one minute, or two minutes, or three minutes, or four minutes — whatever minute you're on. Fairly frequently, like every two minutes or so, it says a quote and a call to action to motivate you and get you to stop daydreaming.

What often happens is you start daydreaming, and then every now and then it keeps snapping you to awareness by reminding you: you've been daydreaming for one minute, you've been daydreaming for ten minutes. It helps you be mindful of the daydream that's going on.

It's okay to daydream for about 10–15 minutes. Keep the program running. Let it continue to interrupt the daydream. Let yourself be mindful. Don't force yourself to stop daydreaming. If you do this and become more mindful of your daydreaming while you're daydreaming, you will daydream less. It will still help you.
