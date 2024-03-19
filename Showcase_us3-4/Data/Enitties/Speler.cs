using Microsoft.AspNetCore.Identity;

namespace Showcase_us3_4.Data.Enitties
{
    public class Speler : IdentityUser
    {
        public string Username { get; set; }
        //public int SpelerId { get; set; }
        public string Email { get; set;}

    }
}
