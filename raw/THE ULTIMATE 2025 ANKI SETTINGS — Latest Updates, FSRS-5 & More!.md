![](https://www.youtube.com/watch?v=uo-qQvOZDfg)

In this video, I discuss Anki’s latest updates (25.02, 24.11, 24.06, 24.04, and 23.12), including a complete overview of the best settings to use with the new FSRS-5. I also cover new features, such as the option to select Easy Days to reduce your study load, the CMRR, the new statistics, and the benefits of the FSRS Helper add-on.  
  
⍟ OUTLINE 📋:  
00:00 Intro  
00:50 Main Changes  
05:53 Recommended Settings  
13:20 Do Not Ignore This  
16:50 Forgetting Curve Shape Changes  
17:40 Sort Order Simulations  
18:38 CMRR  
20:14 How the New Fuzz Works  
21:50 Interpreting the New Stats  
24:00 Is the FSRS Helper Add-on Still Useful?  
26:22 Outro  
  
⍟ REFERENCES 📕:  
─ ABC of FSRS (https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS)  
─ J. Su, J. Ye, L. Nie, Y. Cao and Y. Chen, "Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory," in IEEE Transactions on Knowledge and Data Engineering, vol. 35, no. 10, pp. 10085-10097, 1 Oct. 2023, doi: 10.1109/TKDE.2023.3251721.  
─ Junyao Ye, Jingyong Su, and Yilong Cao. 2022. A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling. In Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '22). Association for Computing Machinery, New York, NY, USA, 4381–4390. doi: 10.1145/3534678.3539081  
─ A Technical Explanation of FSRS (https://expertium.github.io/Algorithm.html)  
─ Benchmark of Spaced Repetition Algorithms (https://expertium.github.io/Benchmark.html)  
─ Anki Changelogs (https://github.com/ankitects/anki/releases)  
─ Sort order simulations & discussion: https://github.com/open-spaced-repetition/review-sort-order-comparison/blob/main/notebook.ipynb, https://forums.ankiweb.net/t/improving-sort-orders/50081, and https://forums.ankiweb.net/t/ordering-request-reverse-relative-overdueness/50051/104  
  
⍟ VISIT OUR KINGDOM 🏰:  
─ Website: https://theanking.com  
─ AnkiHub: https://ankihub.net  
─ AnKing VIP: https://theanking.com/vip  
─ Anki Mastery Course: https://www.theanking.com/anki-mastery-course  
─ How to Make High Quality Cards Free Mini-course: https://theanking.com/free-course  
─ Recommended Supplies (controllers, computer accessories, etc): https://amazon.com/shop/theanking  
  
⍟ Special thanks to Expertium and brishtibheja, who helped correct errors in the script and Luis Gauer who did all the planning and editing of this incredible video.

## Transcript

### Intro

**0:01** · \[Music\] in this video with the an King I'm going to talk about one of the biggest eny updates until now and in the foreseeable future this video will be divided into two main sections the fast lane and the slow lanane the fast lane is for those who are in a hurry and you want very quick recommendations and a review of the main changes since last year since

**0:23** · the last video that we made the slow lane on the other hand will be dedicated to a slightly deeper dive into each update as well as explaining some details of the previously discussed topics in addition there will be small pop-ups like this one appearing throughout the video that will offer helpful tips and answers to frequently asked questions you can check the timeline as well below to see when each subsection begins and ends so with that let's get

### Main Changes

**0:50** · \[Music\] started last year Ani introduced the free spaced repetition scheduler or fsrs for short it's a machine learning algorithm with 17 parameters that are optimized based on the user review history it's an alternative to the old sm2 or super memo2 algorithm that's been around for 35 years which doesn't adapt to each user and has to be tweaked manually since then there have been a total of four new main versions which are named based on the year and the month of release so 2312 244 246 2411

**1:26** · which is the main version we'll be discussing today and 25 52 or uh February of 2025 which is the most recent update focused on some quality of life changes let's begin in December of 2023 Ani 2312 was released there were

**1:43** · two major improvements the first is that the developers were able to refine the shape of the forgetting curve the previous version of fsrs was called fsrs version 4 and the new version with the new curve was version 4.5 the second Improvement is a usability enhancement you no longer need to manually click optimize for each group of options in each deck instead you can now click optimize all presets and it's great because then you we we do

**2:11** · recommend actually having separate settings for separate decks of notably different content and you can optimize them all at once um for example I have separate settings for my medical flashcards and my Chinese flash cards in April 2024 Ani 244 was released and the

**2:28** · compute optimal retention section in the options tab was renamed to compute minimum recommended retention or cmrr following an improvement in accuracy to the calculation that was responsible for generating the minimum recommended retention or mrr enough abbreviations yet um additionally for calculating this you no longer need to input deck size and minutes of study per day now you just need to enter the number of days to simulate before June of 2024 uh a a

**2:59** · certain minimum number of reviews were required for users before they could click on optimize in the deck options with version 24.0 6 you became able to optimize your scheduler with almost any number of reviews so this was a really big change um between December of 2024 and February of 2025 we received some exciting updates including the main highlight of today version five of f f fsrs like I said lots of abbreviations today um this new version introduced two

**3:29** · additional param that help the algorithm account for Same Day reviews which brings the total number of parameters to 19 okay anyway I get excited about these things all right anyway the fsrs optimizer now weighs reviews by recency meaning that fsrs will adapt to your recent reviews better at the cost of being worse for your old reviews of course this is good since it means that fsrs will work better for you if your habits have changed over time and it will better adapt to the recent stuff

**4:02** · another great feature is the ability to run fsrs simulations directly within the options tab of your deck this way you can see how changing different settings such as desired retention number of new cards per day maximum interval affect your workload in this same window you can now select easy days which allows you to schedule fewer cards for reviews on busier days and make your study load more manageable additionally fsrs can

**4:27** · now automatically determine the learning and Rel learning steps for you if you give it permission to enable this simply leave the learning steps field under new cards and the relearning steps uh fied under lapses blank oh and there's also a new review sort order option under the

**4:45** · display order section called descending retrievability which shows you the cards that you are least likely to forget first moving out of the options Tab and going to the card info you can now see a view of the forgetting curve for a specific card provided that fsrs is activated and that's not all this latest update includes two other major features that aren't directly tied to fsrs itself

**5:10** · first the fuzz mechanism has now been overhauled now it smartly tweaks the intervals of your cards to make the workload more uniform this helps having days where you have an overwhelming number of reviews followed by days where you have almost none and second the best Edition drum roll please there's a login

**5:28** · tab for eny right under the preferences now you no longer need to install the add-on to use it you can collaborate in real time receive constant updates directly within the app uh this was really exciting for us and I'm sure it will be exciting for those of you using it as well there's also other minor Advanced statistics and functionalities and so on that have been added but we'll talk about those later when we get to the slow

### Recommended Settings

**5:53** · lane as you might expect my recommended settings have become more General and less specific over time that's in part because fsrs provides a high degree of customization and adaptability in addition to sharing my recommendations I'll guide you on how to set things up to make the most out of ani but first things first make sure you sync your an and confirm that your desktop version is 25.2 or higher also

**6:17** · ensure that your mobile and tablet apps are up to date now the big question super memo 2 algorithm or fsrs definitely fsrs not only is it based based on the latest research in space repetition but it also implements a statistical model that takes your review history into account in other words it's an Adaptive model that adapts to you specifically and what you're studying in fact Damen Elms the main Anki developer is planning to make fsrs the default algorithm in one of the future releases in 2025 all right enough

**6:49** · Small Talk starting from the home screen click the gear icon next to one of your decks on the right hand side a drop- down menu will appear select options to open the set window for your deck there are several sections here and we'll go through them one by one for now I want you to scroll down until you see a section labeled fsrs if you've never activated the algorithm before it will be turned off

**7:12** · simply click the Switch on the first line to activate it congratulations you're Now using the state-of-the-art space repetition algorithm I'm so proud of you brings tears to my eyes every time oh and if you've already activated it in a previous version just follow along with me the design HED retention field shown

**7:31** · here represents how much information you want to retain the higher the value the more cards you'll have to review if you're just starting out with the deck leave it at about 85% simulations show that 85% work well for most people however a common complaint is that the intervals given by fsrs are too long so 90% will likely Remain the default in the near future well okay I don't

**7:54** · recommend touching the fsrs parameters box here unless you're a very very Advanced user which would mean you're more advanced than me cuz I'm not even touching it um if that's you great below that is another field where you can see the name of the selected deck and some additional text here's where you tell fsrs whether you want to include suspended cards with a review history in the scheduling optimization my two cents if you know you have suspended cards that were reviewed in the last 3 months rewrite the query without the minus is suspended

**8:24** · part of the text otherwise just leave it as is to prevent alter suspended cards from affecting your fsrs algorithm next there are two buttons below this field ignore the evaluate one you don't actually need to understand the values shown by it to use fsrs let's click on the optimize button great now you're officially running on fsrs version five

**8:46** · moving on to the reschedule cards on change this usually gives you a large backlog of do cards so enabling it is not recommended unless you want an instant transition from old scheduling to the new schedule next click on the compute minimum recommended retention here you'll need to decide how many days into the future should be considered when simulating a minimum recommended retention rate based on your review history I set mind to 3,650 days or 10 years as I want my

**9:16** · material to stay with me for a long time but feel free to choose choose a shorter time frame if that's what works for you in our last video we showed that the effects uh this may have and overall I would recommend keeping this at least one year longer um once decided click

**9:32** · compute and we'll discuss this further in the slow lane later on but keep in mind that your desired retention value should never be lower than what's suggested here at the bottom of this section is the fsrs simulator which allows you to preview your future study load however any changes made here won't

**9:51** · affect how the algorithm actually functions it's just a simulator here in the daily limits section we have three tabs preset this deck and today only I recommend using the same settings for all three tabs in most cases the new cards per day option controls how many new cards will be introduced to you each day if you're someone who suspends all your cards and later unsuspend them through the browser I recommend setting this to 9999 you just do all the ones

**10:16** · you unsuspended that day if that's not your case set it to a reasonable number based on the amount of information you're processing or you'd like to do every day for maximum reviews per day I also set it to 9999 to ensure that no no cards scheduled for review on a given day is skipped you can ignore the rest of the options in this box now in the

**10:36** · new cards and lapses sections we have some important updates here we need to define the learning steps for new cards and relearning steps for forgotten cards with the latest update you can actually leave both of these fields blank this allows fsrs 5 to automatically manage

**10:52** · these intervals based on your review history I have two recommendations based on your profile if you're busy like me and you to condense all your reviews into a major study session I suggest some setting something between 10 and 20 minutes for both the learning and the relearning step but only one step

**11:09** · otherwise I recommend letting the scheduler manage your intervals to see if that suits your review stuff don't be surprised if it ends up assigning intervals of hours instead of minutes that's completely normal with how fsrs 5 Works um hopefully in the future we'll get some sort of notification with our mobile apps that will tell us when we're actually supposed to review them all right well you you can ignore the rest of the settings here but make sure to regularly check the leech tag in your browser that's where cards you're struggling with will be flagged all

**11:37** · right scrolling down a bit we reach the display order tab which has an important update a new Option called descending retrievability has been added under the review sort order this is the most efficient choice for days when you can't complete all of your reviews as it prioritizes cars that are at the lowest risk of being forgotten and maintains your retention at the desired level for the new card gather sort order option set it to random under new SL review

**12:05** · order select show after reviews and finally for Inay learning review order choose show before reviews this setup ensures that the most unstable cards are reviewed first while new or more mature cards are reviewed later during the day in the burying section as you scroll down you'll find options to ask Anki to space out cards that are closely related for example when you have multiple CL deletions from the same note I'd recommend enabling all three options now skip to the other sections

**12:36** · until you reach easy days this is an exciting new feature you can select specific days of the week for eny to reduce your study load without affecting your scheduling I personally set it to reduce on Saturdays and minimum on Sundays since I usually prioritize time with my family on those days keep in mind that this is a relative table if you set all days to minimum it's not going to make any difference it takes some time for these changes to take effect as well it's not instant later

**13:02** · I'll tell you how to apply these changes instantly all right we're done with the setup just click save and start your reviews oh and I highly recommend sticking around as I'll be covering some tips that can make a big difference in your learning

**13:19** · process there are three crucial points to always remember when using the new fsrs algorithm use buttons properly optimize parameters regularly and avoid reviewing the same cards on the same day repeatedly hold on for a second I'll explain the hard misuse problems is a

### Do Not Ignore This

**13:39** · issue that affects around 10% of users according to an informal study that was conducted on the Anki subreddit real good research here it happens when some people mistakenly believe that the hard button is just a less harsh version of the again button in other words they think of it as a failing grade just like again in Anki hard good and easy are

**13:59** · actually all passing grades from the Ani manual it says pressing hard is recommended when your answer is correct but you had doubts about it or took a long time to recall this misunderstanding leads to excessively long intervals which disrupt the future scheduling of cars and ultimately harm your ability to remember them therefore I strongly recommend that you don't press hard if your answer is incorrect

**14:22** · the hard button should only be used to indicate that you've gotten the card correct but with difficulty if you're someone dealing with this issue don't worry there are some ways to fix it the first option is to use the fsrs helper add-on to select a Time range in the past and retroactively replace all instances where you pressed hard with again the advantage of this approach is that it preserves your review history but it significantly increases your study load in the short term the second option is to set a time range using ignore cards reviewed before in your deck options and then click optimize

**14:55** · this tells the algorithm to disregard all the review history that have been reviewed at least once before that date which unfortunately comes with this drawbacks and if all cards are affected the optimizer will have no data to work with finally a more manual approach would be to go through the cards where you frequently use the hard option and reset them the downside here is that you would be essentially relearning everything from scratch also I recommend

**15:18** · periodically running the optimization say once a month or every time the total number of reviews in your preset doubles so that the algorithm can gradually align itself with your personal learning style finally don't review the same cards on the same day repeatedly in other words don't do too many Same Day reviews meaning you repeatedly fail to move past the learning step more than five times for example if you press good and then press again on the next step and do that over and over and over again while fsrs 5 has new formulas to handle

**15:48** · this the formulas aren't that great some users report that when reviewing a card in the again good Loop longer intervals appear than the previous ones for instance consider the last interval a certain card was 10 days a user ended up pressing again dozens of times and doing several Same Day reviews of that card in

**16:08** · in the end instead of the interval being shorter the interval was let's say 15 days the good news is that this problem was fixed in the latest update where the optimizer will sometimes run twice what happens is that it checks if this problem is occurring and resets the parameters that ended up bugging the interval of those cards well in any case avoid the following first first having too many learning or relearning steps

**16:32** · second be cautious not to get stuck in the again good loops on a card be sure you properly understood and learned its content and lastly don't use filtered decks to cram an unlimited number of reviews in a single

### Forgetting Curve Shape Changes

**16:50** · session one of the main changes since the last video is the update to the default forgetting curve used by the fsrs model let's quickly revisit how this curve Works before we dive into the changes on the x axis we have the time and days and on the Y AIS we have the probability of recall the intersection of these two variables provides theoretical insights into how forgetting occurs and different algorithms assume different formulas for the curve let's compare how the shape of the forgetting curve has evolved across fsrs versions

**17:23** · you'll notice that as fsrs evolved the curve became less and less steep this is a result of trying different formulas and seeing how they affect the model's ability to accurately predict the probability of recall for thousands of

### Sort Order Simulations

**17:41** · users the discussion about sort order becomes particularly important when we consider days when the user couldn't complete their reviews while you might think it's just a matter of personal preference in the end it has significant practical implications such as how it impacts your retention rate I've mentioned before that the best option to choose is descending retrievability this means that the card's easiest to recall will appear first but why do I recommend this Choice the creators of fsrs ran

**18:09** · simulations with all kinds of different sort orders to examine their impact on retention and the amount of time spent studying they found that only four could maintain consistent retention levels even when the user's backlog was never fully cleared among those top four options descending retrievability remained the best choice because it enables you to sustain your retention with the least amount of time spent studying starting with the easiest cards \[Music\]

### CMRR

**18:40** · first as promised let's now discuss why you should be cautious When selecting your desired retention this is one of the most crucial topics to dive deeper into because it serves as the control point the lever if you may that the user plls to guide and influence the algorithm desired retention controls interval lengths enhance the workload a high value of desired retention means we must review cards more often which increases our workload a low value of desired retention on the other hand leads to less reviews decreased workload and decreased memorized stuff a very low

**19:12** · value of desired retention however is related to longer intervals which in turn means that you are more likely to forget and then you frequently have to relearn cards and your workload actually goes to the sky so there exists an optimal value of desired retention a cost benefit tradeoff and the cmrr aims to find that so there are two

**19:33** · forces at play here first as desired retention increases intervals become shorter which increases the number of reviews per day second as desired retention decreases we forget more and must relearn more of our material if we plot the workload as a function of desired retention the graph has a point of minimum workload the cmrr thus seeks to find the minimal

**19:57** · workload knowledge ratio in other words mrr is not a value that gives you the lowest workload but rather a value that gives you the best bang for your buck the best trade-off between workload and the amount of material to be

### How the New Fuzz Works

**20:15** · memorized the overhauled fuzz can be called smart fuzz as suggested by the community it's not actually called that in the manual but I think we need a name and it's kind of fun this uh partially replicates the load balancing functionality that was found in the fsrs helper add-on and the load balancer add-on before that Anki natively has what's called a fuzz Factor each time the interval is calculated it's adjusted by a small random amount between minus and plus 5% the new smart fuzz changes how

**20:45** · exactly that value is calculated the goal is to ensure a more evenly distributed study load across days without affecting the algorithm itself for instance consider a card whose interval becomes 50 days after being rated as good with the old fuzz how much the interval would be changed was completely random

**21:04** · with the smart fuzz how much the interval will be changed depends on how busy the following days are so that the card is more likely to be scheduled on less busy days uh it is important to note that these changes do not impact the user's average retention rate um it's only applied to cards with intervals up to 90 days for cards with longer intervals the old fuzz is used oh and this functionality cannot be disabled if you're using the Anki 2.02

**21:29** · and the newest version of the helper add-on you'll notice that it no longer has load Balan you \[Music\] stinker say hi say

**21:48** · \[Music\] hi this new version of Anki has introduced some interesting new statistics one of them is the daily load found under the future du section this value tells you how many cards on average you will have to review every day assuming that you do your reviews diligently as I know you're all doing and don't have a backlog if you don't have a backlog this number should be close to the number of cards you have due for today the daily load is

### Interpreting the New Stats

**22:16** · calculated by summing the inverse of all intervals this means that cards with very long intervals say 100 days contribute very little to the total value which makes sense because they're not going to significantly impact your daily studies load on the other hand cars with a one-day interval would contribute integrally to your study load moving down we come to the card retrievability section here a new metric called estimated total knowledge has been added no it's not the total knowledge you have in your brain would be impossible uh this statistic helped

**22:48** · estimate how many cards you currently know based on your average probability of recall or retrievability it's calculated in a very straightforward Way by multiplying Your Average retrievability by the total number of cards you reviewed at least once another statistic that's been added is the true retention table which you might recognize from an older add-on well now it's native and built into Ani here it's important to

**23:10** · remember that a card's maturity level is determined by its interval if a card has an interval of less than 21 days it's classified as young if the interval is 21 days or more it's considered mature this terminology isn't related to fsrs it's just based on the assumption that a card with a 3-we interval has been in your ction long enough to be considered established information also the pass rate also known as true retention is a statistic that is calculated as the number of reviews you passed or answered hard good or easy divided by the total

**23:43** · number of reviews of cards that had an uh intervals greater than or equal to one day you can use this information to compare your annual retention with your weekly retention for example and don't forget to regularly use the optimize button in the deck options

### Is the FSRS Helper Add-on Still Useful?

**24:03** · yes is still very useful if you want to fine-tune your schedule even further fsrs helper add-on is essential there are two main reasons that build upon the recommended settings we discussed at the beginning of this video the first is the disperse siblings functionality for

**24:19** · those who aren't familiar siblings are cards that come from the same note for example a Clos note with different words emitted in different cards think about it wouldn't you agree that reviewing two cards from the same note within a short period of time is going to cause some interference in memory formation and retrievability because there's similar information right the purpose of disperse siblings is to minimize this interference while Anki does have a native feature called Barry siblings it only postpones that sibling Card review by one day in contrast the fsrs helpers

**24:51** · disperse siblings function calculates different intervals that allow for better spaced reviews between related cards so if you're using the add-on I recommend keeping this function always enabled well I need to be honest with you here the secret that only users who dive a bit deeper discover is that the fsrs version 5 formulas for Same Day reviews are rather rudimentary so letting it control the learning steps is merely a recommendation for those who don't want to think about it too much if you do want to think about it there's a way to fine-tune your Schuler even further this is where the second and in

**25:23** · my opinion most important utility of the fsrs helper add-on comes in the learning step steps statistics table Here's the final recommendation on how to optimize your learning steps first use the default learning steps in your normal review routine for at least one month

**25:39** · then go to the fsrs Helper and look for this table once you find it you'll notice it's relatively complicated you can ignore that for now only the last three lines are important there you can see your or uh set your desired retention rate for short-term reviews then it will suggest configurations for both learning steps and relearning steps simply copy and paste these into the respective places in your deck options by doing this periodically you can greatly improve your short-term retention and increase the efficiency of your reviews also native easy days

**26:12** · cannot be applied immediately it takes time for them to kick in the add-on has a feature called apply easy days now well that's it a lot right hopefully you enjoyed that as much as I did the moral of the story is that Anki with the fsrs algorithm is the most powerful and efficient space repetition flashcard app out there thanks for coming and learning with the aning I get back to Smashing that space bar