using Microsoft.AspNetCore.SignalR;
using System;
//using System.Web;

namespace Showcase_us3_4.Hubs
{
    public class BattleHubApi : Hub
    {

        public async Task SendMessage(string user, string choice)
        {
            await Clients.All.SendAsync("SendMessage", user, choice);
        }

        //public async Task SendChoice(string choice)
        //{
        //    string? winner = null;
        //   string? vorigeKeuze = null;
        //    if (vorigeKeuze == null)
        //    {
        //        vorigeKeuze = choice;
        //    } else
        //    {
        //        if (vorigeKeuze == choice)
        //        { 
        //            winner = "gelijkspel";
        //        }
        //        else if (vorigeKeuze.Equals('1') && choice.Equals('2') )
        //        {
        //            winner = "Defend wint van Attack!";
        //        }
        //        else if (vorigeKeuze.Equals( '2') && choice.Equals( '3'))
        //        {
        //            winner = "Flank wint van Defend!";
        //        }
        //        else if (vorigeKeuze.Equals('3') && choice.Equals('1'))
        //        {
        //            winner = "Attack wint van Flank!";
        //        }
        //        else if (choice.Equals('1') && vorigeKeuze.Equals('2'))
        //        {
        //            winner = "Defend wint van Attack!";
        //        }
        //        else if (choice.Equals('2') && vorigeKeuze.Equals('3'))
        //        {
        //            winner = "Flank wint van Defend!";
        //        }
        //        else if (choice.Equals('3') && vorigeKeuze.Equals('1'))
        //        {
        //            winner = "Attack wint van Flank!";
        //        }
        //    }

            
        //    await Clients.All.SendAsync("SendChoice", winner);

        //}
    }
}
