USE [futekapp-db-dev]
GO
SET IDENTITY_INSERT [dbo].[ProductNotesCategories] ON 

INSERT [dbo].[ProductNotesCategories] ([Id], [CategoryDescription], [SubmittedBy]) VALUES (101, N'Phase Out', NULL)
INSERT [dbo].[ProductNotesCategories] ([Id], [CategoryDescription], [SubmittedBy]) VALUES (102, N'Price Change', NULL)
INSERT [dbo].[ProductNotesCategories] ([Id], [CategoryDescription], [SubmittedBy]) VALUES (103, N'Specification Modified ', NULL)
INSERT [dbo].[ProductNotesCategories] ([Id], [CategoryDescription], [SubmittedBy]) VALUES (104, N'Technical Support Challenge', NULL)
INSERT [dbo].[ProductNotesCategories] ([Id], [CategoryDescription], [SubmittedBy]) VALUES (105, N'New Product', NULL)
INSERT [dbo].[ProductNotesCategories] ([Id], [CategoryDescription], [SubmittedBy]) VALUES (106, N'Other', NULL)
INSERT [dbo].[ProductNotesCategories] ([Id], [CategoryDescription], [SubmittedBy]) VALUES (107, N'ProductNotes_Cat', NULL)
SET IDENTITY_INSERT [dbo].[ProductNotesCategories] OFF
SET IDENTITY_INSERT [dbo].[ProductNotes] ON 

INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (132, 102, N'Product Notes 1', N'<p>Product Note 1 Added By Rajyam</p>', 99, CAST(N'2018-11-06T13:00:00.000' AS DateTime), CAST(N'2018-11-07T13:00:00.000' AS DateTime), N'sushma@futek.com', NULL)
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (133, 101, N'Product Notes 2', N'<p>Test Product Notes 2 Added By Rajyam</p>', 67, CAST(N'2018-11-04T18:30:00.000' AS DateTime), CAST(N'2018-11-08T18:30:00.000' AS DateTime), N'sushma@futek.com', CAST(N'2018-11-05T12:02:50.563' AS DateTime))
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (134, 103, N'Test30', N'<p>Test Data</p>', 2, CAST(N'2018-11-04T18:30:00.000' AS DateTime), CAST(N'2018-11-06T18:30:00.000' AS DateTime), N'sushma@futek.com', CAST(N'2018-11-05T12:13:55.987' AS DateTime))
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (137, 103, N'Test 20', N'<p>Website Testing&nbsp;</p>', 27, CAST(N'2018-11-05T18:30:00.000' AS DateTime), CAST(N'2018-11-06T18:30:00.000' AS DateTime), N'sushma@futek.com', CAST(N'2018-11-05T12:15:52.510' AS DateTime))
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (139, 102, N'Product Notes 3', NULL, 10, NULL, NULL, N'sushma@futek.com', CAST(N'2018-11-05T12:23:33.880' AS DateTime))
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (140, 102, N'Product Notes 3', NULL, 10, CAST(N'2018-11-04T18:30:00.000' AS DateTime), CAST(N'2018-11-12T18:30:00.000' AS DateTime), N'sushma@futek.com', CAST(N'2018-11-05T12:23:53.277' AS DateTime))
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (141, 102, N'Product Notes 3', N'<p>Test Note</p>', 10, CAST(N'2018-11-04T18:30:00.000' AS DateTime), CAST(N'2018-11-12T18:30:00.000' AS DateTime), N'sushma@futek.com', CAST(N'2018-11-05T12:24:08.790' AS DateTime))
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (142, 102, N'Product Notes 3', N'<p>Test Note</p>', 10, CAST(N'2018-11-04T18:30:00.000' AS DateTime), CAST(N'2018-11-12T18:30:00.000' AS DateTime), N'sushma@futek.com', CAST(N'2018-11-05T12:24:44.317' AS DateTime))
INSERT [dbo].[ProductNotes] ([Id], [CategoryId], [NoteSTitle], [ProductNotesDescription], [ProductModelId], [ActivationDtTm], [EndDtTm], [SubmittedBy], [LastUpdateDtTm]) VALUES (143, 103, N'Test 20', N'<p>Test 12</p>', 4, CAST(N'2018-11-08T18:30:00.000' AS DateTime), CAST(N'2018-11-05T18:30:00.000' AS DateTime), N'sushma@futek.com', CAST(N'2018-11-05T12:31:55.063' AS DateTime))
SET IDENTITY_INSERT [dbo].[ProductNotes] OFF
SET IDENTITY_INSERT [dbo].[ProductNotesForProducts] ON 

INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (2978, 134, N'sushma@futek.com', CAST(N'2018-11-05T12:13:56.020' AS DateTime), 101)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (2980, 134, N'sushma@futek.com', CAST(N'2018-11-05T12:13:56.020' AS DateTime), 102)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (2981, 134, N'sushma@futek.com', CAST(N'2018-11-05T12:13:56.020' AS DateTime), 103)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (3881, 142, N'sushma@futek.com', CAST(N'2018-11-05T12:24:44.333' AS DateTime), 104)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (3883, 142, N'sushma@futek.com', CAST(N'2018-11-05T12:24:44.333' AS DateTime), 105)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (1096, 133, N'sushma@futek.com', CAST(N'2018-11-05T12:02:50.590' AS DateTime), 98)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (3717, 133, N'sushma@futek.com', CAST(N'2018-11-05T12:02:50.590' AS DateTime), 99)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (716, 132, N'sushma@futek.com', CAST(N'2018-11-05T10:44:16.490' AS DateTime), 95)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (3719, 133, N'sushma@futek.com', CAST(N'2018-11-05T12:02:50.590' AS DateTime), 100)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (743, 132, N'sushma@futek.com', CAST(N'2018-11-05T10:44:16.490' AS DateTime), 96)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (725, 132, N'sushma@futek.com', CAST(N'2018-11-05T10:44:16.490' AS DateTime), 97)
INSERT [dbo].[ProductNotesForProducts] ([ProductId], [ProductNotesId], [SubmittedBy], [LastUpdateDtTm], [Id]) VALUES (3582, 143, N'sushma@futek.com', CAST(N'2018-11-05T12:31:55.093' AS DateTime), 106)
SET IDENTITY_INSERT [dbo].[ProductNotesForProducts] OFF
