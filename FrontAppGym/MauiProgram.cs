using CommunityToolkit.Maui;
using Microsoft.Extensions.Logging;

namespace FrontAppGym
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                    fonts.AddFont("FontAwesome.ttf", "FontAwesome");
                });

#if DEBUG
            builder.UseMauiApp<App>().UseMauiCommunityToolkit();
            builder.Logging.AddDebug();
#endif

            return builder.Build();
        }
    }
}
