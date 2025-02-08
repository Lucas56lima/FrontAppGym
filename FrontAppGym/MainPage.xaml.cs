namespace FrontAppGym
{
    public partial class MainPage : ContentPage
    {
        private Label WorkoutLabel;
        private Label TitleLabel;
        private Label GroupLabel;
        public MainPage()
        {  
           
            InitializeComponent();
            HourVerify();           
        }

        private void OnWorkoutButtonClicked(object sender, EventArgs e)
        {
            //await Shell.Current.GoToAsync("//WorkoutPage");
            BorderWorkout.IsVisible = true;
        }

        private void OnHistoryButtonClicked(object sender, EventArgs args)
        {
            BorderWorkout.IsVisible = false;
        }
        private void OnArrowDownClicked(object sender, EventArgs e)
        {
            var button = sender as ImageButton;
            if (button != null)
            {
                button.Source = "arrow_up.png";
                button.Clicked -= OnArrowDownClicked; // Remove o evento atual
                button.Clicked += OnArrowUpClicked;   // Adiciona o novo evento
                LabelOrientation.IsVisible = true;
                WorkoutContainer.IsVisible = true;
                //InitialButton.IsVisible = true;
                if (WorkoutContainer.Children.Count == 0)
                {
                    List<string> workouts = ["Treino 1", "Treino 2", "Treino 3"];
                    List<string> groups = ["Peito e Tríceps", "Dorsal e Bíceps", "Inferiores e Ombros"];
                    List<string> lastWorkoutDates = ["05/12/2024", "03/12/2024", "27/11/2024"];
                   

                    for (int i = 0; i < workouts.Count; i++)
                    {
                        string workoutName = workouts[i];
                        var workoutFrame = new Frame
                        {
                            CornerRadius = 10,
                            Padding = 10,
                            Margin = new Thickness(5),
                            BackgroundColor = Colors.White,
                            BorderColor = Colors.LightGray
                        };

                        var workoutLayout = new StackLayout
                        {
                            Spacing = 5
                        };

                        var titleLabel = new Label
                        {
                            Text = workouts[i],
                            FontSize = 18,
                            FontAttributes = FontAttributes.Bold,
                            TextColor = Colors.Black
                        };

                        var groupLabel = new Label
                        {
                            Text = groups[i],
                            FontSize = 14,
                            TextColor = Colors.Gray
                        };

                        var lastWorkoutLabel = new Label
                        {
                            Text = $"Último treino concluído em: {lastWorkoutDates[i]}",
                            FontSize = 12,
                            TextColor = Colors.Blue
                        };

                        var buttonLayout = new StackLayout
                        {
                            Orientation = StackOrientation.Horizontal,
                            HorizontalOptions = LayoutOptions.CenterAndExpand,
                            Spacing = 10
                        };

                        var viewWorkoutButton = new Button
                        {
                            Text = "Acessar",
                            FontSize = 16,
                            BackgroundColor = Color.FromRgba("#E91E63"),
                            TextColor = Colors.White
                        };
                                               
                        workoutLayout.Children.Add(titleLabel);
                        workoutLayout.Children.Add(groupLabel);
                        workoutLayout.Children.Add(lastWorkoutLabel);
                        workoutLayout.Children.Add(buttonLayout);
                        workoutLayout.Children.Add(viewWorkoutButton);                       
                        workoutFrame.Content = workoutLayout;
                        viewWorkoutButton.Clicked += (sender, args) => OnClickedViewWorkoutButton(workoutName);
                        WorkoutContainer.Children.Add(workoutFrame);
                        
                    }
                }

            }
        }

        private async void OnClickedViewWorkoutButton(string workoutName)
        {
            await Navigation.PushAsync(new WorkoutPage());
        }

        private void OnArrowUpClicked(object sender, EventArgs args)
        {
            var button = sender as ImageButton;
            if (button != null)
            {
                button.Source = "arrow_down.png";
                button.Clicked -= OnArrowUpClicked;  // Remove o evento atual
                button.Clicked += OnArrowDownClicked;
                LabelOrientation.IsVisible = false;              
                WorkoutContainer.Children.Clear();
            }
             
        }

        //private void OnButtonClicked(object sender, EventArgs e)
        //{

        //}

        private void HourVerify()
        {
            DateTime today = DateTime.Now;
            InitialLabel.Text = today.Hour switch
            {
                <= 13 => "Bom dia, usuário",
                > 13 and < 19 => "Boa tarde, usuário",
                _ => "Boa noite, usuário"
            };
        }
    }

}
